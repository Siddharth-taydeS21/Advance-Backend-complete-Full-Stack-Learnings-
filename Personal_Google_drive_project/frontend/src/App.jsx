import { useState, useEffect } from 'react'

function App() {
  const [newData, setData] = useState([])
  const [progress, setProgress] = useState(0);
  const rootUrl = 'http://127.0.0.1:4000/';

  const fetchData = async () => {
    const res = await fetch(rootUrl);
    const data = await res.json();
    setData(data)
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://127.0.0.1:3000/', true)
    xhr.setRequestHeader('filename', file.name)
    xhr.addEventListener('load', () => {
      console.log(xhr.response)
      fetchData()
    })
    xhr.upload.addEventListener('progress', (e) => {
      const progress = (e.loaded / e.total) * 100;
      setProgress(progress.toFixed(2));
    })
    xhr.send(file);
  }

  const handleDelete = async (filename) => {
    const response = await fetch(rootUrl, {method: 'DELETE', body: filename})
    const data = await response.text();
    console.log(data);
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h1>My Files</h1>

      <h3>Upload a file</h3>
      <input type="file" onChange={handleUpload} />
      <p>Progress: {progress}%</p>
      {
        newData.map((item, i) => {
          if (item.isFile) {
            return <div key={i} style={{ display: 'flex', justifyContent: 'space-between', width: '800px' }}>
              <p style={{ textTransform: 'capitalize' }}>{item.name}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <a href={`${rootUrl}${item.name}?action=preview`}
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
                <a href={`${rootUrl}${item.name}?action=download`}
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
                <a href={`${rootUrl}${item.name}?action=download`}
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
                <a 
                // href={''}
                  onClick={() => handleDelete(item.name)}
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
          } else {
            return <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', width: '800px' }}>
              <p style={{ textTransform: 'capitalize' }}>{item.name}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <a href={`${rootUrl}${item.name}`}
                  onClick={() => <newFolder />}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}>Preview</a>
              </div>
            </div>
          }
        })
      }
    </div>
  )
}

export default App
