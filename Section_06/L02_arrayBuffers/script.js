const fileInput = document.getElementById('file');
const reader = new FileReader();

fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    reader.addEventListener('load', (e) => {
        const arrayBuffer = e.target.result;
        console.log(arrayBuffer)
    })

    reader.readAsArrayBuffer(file);
})