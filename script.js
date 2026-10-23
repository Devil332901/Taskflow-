// Simulating Asynchronous API Fetch with Delay & Skeleton Handling
document.addEventListener("DOMContentLoaded", () => {
    const metricsGrid = document.getElementById("metrics-grid");
    const taskList = document.getElementById("task-list");

    setTimeout(() => {
        // Render Metric Cards after async load
        metricsGrid.innerHTML = `
            <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-indigo-500">
                <p class="text-sm text-gray-500">Total Visitors</p>
                <h3 class="text-2xl font-bold text-gray-800">12,450</h3>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                <p class="text-sm text-gray-500">Revenue</p>
                <h3 class="text-2xl font-bold text-gray-800">$34,200</h3>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <p class="text-sm text-gray-500">Active Tasks</p>
                <h3 class="text-2xl font-bold text-gray-800">24</h3>
            </div>
        `;

        taskList.innerHTML = `
            <div class="p-3 bg-gray-50 rounded flex justify-between items-center">
                <span>Refactor Tailwind Grid Layout</span>
                <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Completed</span>
            </div>
            <div class="p-3 bg-gray-50 rounded flex justify-between items-center">
                <span>Implement JWT Auth Middleware</span>
                <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
            </div>
        `;
    }, 1500); // 1.5s simulated network delay
});