function copyToClipboard(phoneNumber) {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);

    // Select and copy the value
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(tempInput.value).then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard!`);
    }).catch(() => {
        alert(`Failed to copy the phone number.`);
    });

    // Remove the temporary input element
    document.body.removeChild(tempInput);
}