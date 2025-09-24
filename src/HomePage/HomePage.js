import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import D3Chart from '../D3Chart/D3Chart';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
    const [chartData, setChartData] = useState({
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#4bc0c0',
                    '#9966ff',
                    '#ff9f40'
                ]
            }
        ],
        labels: []
    });

    const [budgetData, setBudgetData] = useState([]);

    useEffect(() => {
        getBudget();
    }, []);

    const getBudget = () => {
        axios.get('http://localhost:3000/budget')
            .then(function (res) {
                const budgetItems = res.data.myBudget;
                
                // Set data for Chart.js pie chart
                setChartData({
                    datasets: [
                        {
                            data: budgetItems.map(item => item.budget),
                            backgroundColor: [
                                '#ffcd56',
                                '#ff6384',
                                '#36a2eb',
                                '#fd6b19',
                                '#4bc0c0',
                                '#9966ff',
                                '#ff9f40'
                            ]
                        }
                    ],
                    labels: budgetItems.map(item => item.title)
                });

                // Set data for D3.js bar chart
                setBudgetData(budgetItems);
            })
            .catch(function (error) {
                console.error('Error fetching budget data:', error);
            });
    };

    return (
        <main className="center" id="main">
            <section className="page-area">
                {/* All your existing articles... */}
                <article>
                    <h2>Stay on track</h2>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
        
                <article>
                    <h2>Alerts</h2>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
        
                <article>
                    <h2>Results</h2>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they live happier lives... since they spend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
        
                <article>
                    <h2>Free</h2>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </article>
        
                <article>
                    <h2>Stay on track</h2>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down,
                        you would get surprised! Proper budget management depends on real data... and this
                        app will help you with that!
                    </p>
                </article>
        
                <article>
                    <h2>Alerts</h2>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </article>
        
                <article>
                    <h2>Results</h2>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster!
                        Also, they live happier lives... since they spend without guilt or fear... 
                        because they know it is all good and accounted for.
                    </p>
                </article>
        
                <article>
                    <h2>Charts</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ margin: '20px' }}>
                            <h3>Budget Distribution (Pie Chart)</h3>
                            <div style={{ width: '400px', height: '400px' }}>
                                <Pie 
                                    data={chartData} 
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div style={{ margin: '20px' }}>
                            <h3>Budget Amounts (Bar Chart) - D3JS chart</h3>
                            <D3Chart data={budgetData} />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default HomePage;