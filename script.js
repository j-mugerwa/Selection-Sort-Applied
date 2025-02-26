const deviceList = document.getElementById("device-list");
const sortedList = document.getElementById("sorted-list");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
const deviceCountInput = document.getElementById("device-count");

let devices = [];

// Generate devices with random bandwidth requests
function generateDevices() {
    deviceList.innerHTML = "";
    sortedList.innerHTML = "";
    devices = [];

    let deviceCount = parseInt(deviceCountInput.value);

    for (let i = 0; i < deviceCount; i++) {
        let bandwidth = Math.floor(Math.random() * 100) + 10; // Random bandwidth (10-110 Mbps)
        devices.push({ id: `Device ${i + 1}`, bandwidth });

        let deviceDiv = document.createElement("div");
        deviceDiv.classList.add("device");
        deviceDiv.textContent = `${devices[i].id} - ${devices[i].bandwidth} Mbps`;
        deviceList.appendChild(deviceDiv);
    }
}

// Selection Sort Algorithm for Bandwidth Allocation
async function selectionSortDevices() {
    let n = devices.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (devices[j].bandwidth < devices[minIndex].bandwidth) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = devices[i];
            devices[i] = devices[minIndex];
            devices[minIndex] = temp;
        }
    }

    displaySortedDevices();
}

// Display the sorted bandwidth allocation
function displaySortedDevices() {
    sortedList.innerHTML = "";

    devices.forEach(device => {
        let deviceDiv = document.createElement("div");
        deviceDiv.classList.add("device");
        deviceDiv.style.backgroundColor = "green"; // Sorted items in green
        deviceDiv.textContent = `${device.id} - ${device.bandwidth} Mbps`;
        sortedList.appendChild(deviceDiv);
    });
}

// Event Listeners
generateBtn.addEventListener("click", generateDevices);
sortBtn.addEventListener("click", selectionSortDevices);

// Generate initial devices on page load
generateDevices();
