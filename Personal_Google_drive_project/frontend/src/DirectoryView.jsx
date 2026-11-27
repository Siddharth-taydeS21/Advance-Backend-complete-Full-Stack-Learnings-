import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  textDecoration: 'none'
}

function DirectoryView() {
  const BASE_URL = 'http://127.0.0.1:4000/'
  const [filesData, setFilesData] = useState([])
  const [directoryData, setDirectoryData] = useState([])
  const [renameFileID, setRenameFileID] = useState([])
  const [progress, setProgress] = useState(0);
  const [filename, setFilename] = useState('');
  const [dirname, setDirname] = useState('');
  const { dirID } = useParams();

  // READ FEATURE
  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}directory/${dirID || ''}`);
    const data = await res.json();
    // console.log(data)
    setFilesData(data.files)
    setDirectoryData(data.directories)
  }

  // CREATE FEATURE
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${BASE_URL}file/${file.name}`, true)
    // we can send the parent directory ID as the req.header, work on that feature 
    xhr.setRequestHeader('parentDirId', `${dirID || ''}`);
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
  const handleDelete = async (id, str) => {
    const url = 
    str === 'forFile' 
    ? `${BASE_URL}file/${id}` 
    : `${BASE_URL}directory/${id}`; 
    // console.log(url)

    const response = await fetch(url, {
      method: 'DELETE'
    })
    const data = await response.text();
    console.log(data);
    fetchData();
    // console.log(id)
  }

  const UpdateInput = (filename, fileID) => {
    setFilename(filename);
    setRenameFileID(fileID)
  }

  // UPDATE FEATURE
  const handleRename = async (id, str) => {
    const url = 
    str === 'forFile' 
    ? `${BASE_URL}file/${id}?newName=${filename}` 
    : `${BASE_URL}directory/${id}?newName=${filename}`; 

    const response = await fetch(url, {
      method: 'PATCH',
    })
    const data = await response.text();
    console.log(data)
    fetchData();
    setFilename('')
  }

  const handleCreateDir = async (e) => {
    e.preventDefault();
    if (dirname) {
      const res = await fetch(`${BASE_URL}directory/${dirname}`, {
        method: 'POST',
        headers: {
          parentDirID: dirID || ''
        }
      })
      const data = await res.text()
      console.log(data)
      fetchData()
      setDirname('');
    }
    return
  }

  useEffect(() => {
    fetchData();
  }, [dirID])

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
        directoryData.map((dir) => {
          if (!dir) {
            return;
          }else{
            return <div key={dir.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ textTransform: 'capitalize' }}>📁 {dir.dirName}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>

              <Link to={`/directory/${dir.id}`} style={buttonStyle}>Preview</Link>

              <a onClick={() => UpdateInput(dir.dirName, dir.id)} style={buttonStyle}>Rename</a>

              <button style={buttonStyle} onClick={() => { handleRename(dir.id, 'forDir')}}>Save</button>

              <a onClick={() => handleDelete(dir.id, 'forDir')} style={buttonStyle} >Delete</a>

            </div>
          </div>
          }
        })
      }
      { // files data 
        filesData.map(({ filename, id }) => {
          return <div key={id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ textTransform: 'capitalize' }}>🗃️ {filename}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>

              <a href={`${BASE_URL}file/${id}`} style={buttonStyle} >Preview</a>

              <a href={`${BASE_URL}file/${id}?action=download`} style={buttonStyle}>Download</a>

              <a onClick={() => UpdateInput(filename, id)} style={buttonStyle}>Rename</a>

              <button style={buttonStyle} onClick={() => { handleRename(renameFileID, 'forFile')}}>Save</button>

              <a onClick={() => handleDelete(id, 'forFile')} style={buttonStyle}>Delete</a>

            </div>
          </div>
        })
      }
    </div>
    // <div>hii</div>
  )
}

export default DirectoryView