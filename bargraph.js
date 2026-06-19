const ctx = document.getElementById('tuitionChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Tuition',
            'Miscellaneous',
            'Laboratory'
        ],
        datasets: [
            {
                label: 'SY 2024-2025',
                data: [2500, 1200, 2300],
                backgroundColor: '#4F7DF3',
                borderRadius: 8
            },
            {
                label: 'SY 2025-2026',
                data: [2400, 2300, 2400],
                backgroundColor: '#B38AF8',
                borderRadius: 8
            }
        ]
    },
    options: {
        responsive: true,

        plugins: {
            title: {
                display: true,
                text: 'Tuition Fee',
                font: {
                    size: 24
                }
            },

            legend: {
                position: 'top'
            }
        },

        scales: {
            y: {
                beginAtZero: true,
                max: 3000
            }
        }
    }
});
