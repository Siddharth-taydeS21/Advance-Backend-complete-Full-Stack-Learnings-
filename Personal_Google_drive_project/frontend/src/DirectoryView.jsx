import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function DirectoryView() {
  const BASE_URL = 'http://127.0.0.1:4000/'
  const [newData, setData] = useState([])
  const [progress, setProgress] = useState(0);
  const [filename, setFilename] = useState('');
  const [oldFilename, setOldFilename] = useState('');
  const {'*': dirpath} = useParams();

  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}directory/${dirpath ? dirpath : ''}`);
    const data = await res.json();
    setData(data)
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${BASE_URL}files/uploads`, true)
    xhr.setRequestHeader('filename', file.name)
    xhr.setRequestHeader('filepath', dirpath)
    xhr.addEventListener('load', () => {
      console.log(xhr.response)
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

  const handleDelete = async (filename) => {
    const response = await fetch(`${BASE_URL}files/${dirpath ? dirpath + '/' : ''}${filename}`, { method: 'DELETE' })
    const data = await response.text();
    console.log(data);
    fetchData();
  }

  const UpdateInput = (filename) => {
    setOldFilename(filename)
    setFilename(filename);
  }

  const handleRename = async (oldFileName, filename) => {
    // console.log(oldFileName, filename);
    const response = await fetch(`${BASE_URL}files/${oldFileName}`, { 
      method: 'PATCH', 
      body: JSON.stringify({oldFileName, filename, dirpath}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.text();
    console.log(data)
    fetchData();
    setFilename('')
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div style={{padding: '10px 30px'}}>
      <h1>My Files</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <h3>Upload a file</h3>
          <input type="file" onChange={handleUpload} />
          <p>Progress: {progress}%</p>
        </div>

        <div>
          <h3>Rename a file</h3>
          <input type="text" value={filename} onChange={(e) => {
            setFilename(e.target.value)
          }} />
          <button onClick={() => { handleRename(oldFilename, filename) }}>Save</button>
        </div>

      </div>
      {
        newData.map(({name, isDirectory}, i) => {
          return <div key={i} style={{ display: 'flex', justifyContent: 'space-between'}}>
            <p style={{ textTransform: 'capitalize' }}>{isDirectory ? "📁" : "🗃️" }{name}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>

              {!isDirectory && <a href={`${BASE_URL}files/${dirpath ? dirpath + '/' : ''}${name}`}
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
              >Preview</a>}

              {isDirectory && <a href={`/${dirpath ? dirpath + '/' : ''}${name}`}
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
              >Preview</a>}

              {!isDirectory && <a href={`${BASE_URL}files/${dirpath ? dirpath + '/' : ''}${name}?action=download`}
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
              >Download</a>}

              <a onClick={() => UpdateInput(name)}
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

              <a onClick={() => handleDelete(name)}
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
  )
}

export default DirectoryView