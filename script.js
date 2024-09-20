document.getElementById("upload-btn").addEventListener("click", function() {
    const fileInput = document.getElementById("file-input");
    const fileList = document.getElementById("file-list");
    const uploadStatus = document.getElementById("upload-status");

    if (fileInput.files.length === 0) {
        uploadStatus.textContent = "Please select a file to upload.";
        return;
    }

    const files = fileInput.files;
    uploadStatus.textContent = "";

    // Simulate file upload
    for (let i = 0; i < files.length; i++) {
        const fileItem = document.createElement("li");
        fileItem.textContent = `${files[i].name} - ${files[i].size} bytes`;
        fileList.appendChild(fileItem);
    }

    uploadStatus.textContent = "Files uploaded successfully!";
    fileInput.value = ""; // Reset file input
});
