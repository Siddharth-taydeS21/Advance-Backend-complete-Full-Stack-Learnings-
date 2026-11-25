import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function DirectoryView() {
  const BASE_URL = 'http://127.0.0.1:4000/'
  const [filesData, setFilesData] = useState([])
  const [directoryData, setDirectoryData] = useState([])
  const [renameFileID, setRenameFileID] = useState([])
  const [progress, setProgress] = useState(0);
  const [filename, setFilename] = useState('');
  const [dirname, setDirname] = useState('');
  const { '*': dirpath } = useParams();

  // READ FEATURE
  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}directory`);
    const data = await res.json();
    // console.log(data)
    setFilesData(data.files)
  }

  // CREATE FEATURE
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${BASE_URL}file/${file.name}`, true) 
    // we can send the parent directory ID as the req.header, work on that feature 
    xhr.addEventListener('load', () => {
      fetchData()
      setProgress(0)
      e.target.value = '';
    })
    xhr.upload.addEventListener('progress', (e) => {
      const progress = (e.loaded / e.total) * 100;
      setProgress(progress.toFixed(2));
    })
    xhr.send(file);
  }

  // DELETE FEATURE
  const handleDelete = async (id) => {
    const response = await fetch(`${BASE_URL}file/${id}`, {
      method: 'DELETE'
    })
    const data = await response.text();
    console.log(data);
    fetchData();
  }

  const UpdateInput = (filename, fileID) => {
    setFilename(filename);
    setRenameFileID(fileID)
  }

  // UPDATE FEATURE
  const handleRename = async (id) => {
    const response = await fetch(`${BASE_URL}file/${id}?newName=${filename}`, {
      method: 'PATCH',
    })
    const data = await response.text();
    console.log(data)
    fetchData();
    setFilename('')
  }

  const handleCreateDir = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}directory/${dirpath ? dirpath + '/' : ''}${dirname}`
    const res = await fetch(url, { method: 'POST' });
    const data = await res.text();
    fetchData()
    setDirname('');
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div style={{ padding: '10px 30px' }}>
      <h1>My Files</h1>

      <hr />
      <div style={{ gap: '30px' }}>
        <div>
          <h3>Upload a file</h3>
          <input type="file" onChange={handleUpload} />
          <p>Progress: {progress}%</p>
        </div>

        <hr />

        <div>
          <h3>Rename a file/folder</h3>
          <input type="text" value={filename} onChange={(e) => {
            setFilename(e.target.value)
          }} />
          <button onClick={() => { handleRename(renameFileID) }}>Save</button>
        </div>

        <hr />

        <div>
          <h3>Create Folder</h3>
          <form onSubmit={handleCreateDir}>
            <input type="text" onChange={(e) => setDirname(e.target.value)} value={dirname} />
            <button>Create</button>
          </form>
        </div>

        <hr />

      </div>
      { // files data 
        filesData.map(({ filename, id }) => {
          return <div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ textTransform: 'capitalize' }}>{filename}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>

              <a href={`${BASE_URL}file/${id}`}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >Preview</a>

              <a href={`${BASE_URL}file/${id}?action=download`}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >Download</a>

              <a onClick={() => UpdateInput(filename, id)}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >Rename</a>

              <a onClick={() => handleDelete(id)}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >Delete</a>

            </div>
          </div>
        })
      }
    </div>
    // <div>hii</div>
  )
}

export default DirectoryView