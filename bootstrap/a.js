
// Sidebar Toggle for Mobile
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
}

// Revenue Line Chart Initialization
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [{
            label: 'Revenue ($)',
            data: [12400, 19800, 15300, 24500, 28900],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.05)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.35
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                grid: {
                    color: '#f1f5f9'
                },
                ticks: {
                    color: '#64748b'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#64748b'
                }
            }
        }
    }
});

// Traffic Sources Doughnut Chart Initialization
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(trafficCtx, {
    type: 'doughnut',
    data: {
        labels: ['Direct', 'Social', 'Referral', 'Organic'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#4f46e5', '#38bdf8', '#fbbf24', '#f87171'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    font: {
                        family: 'Inter',
                        size: 12
                    },
                    color: '#64748b'
                }
            }
        },
        cutout: '75%'
    }
});
