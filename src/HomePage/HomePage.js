import React from 'react';


function HomePage() {
  return (
    <main className="center" id="main">

        {/* This is a Semantic HTML Change: Use <section> for grouped page content */}
        <section className="page-area">

            {/* This is an A11y Change: Ensure proper heading structure (use h2 instead of multiple h1s) */}
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
                {/* This is an A11y Change: Add aria-label for context */}
                <h2>Chart</h2>
                <p>
                    <canvas id="myChart" width="400" height="400" aria-label="Budget distribution chart" role="img"></canvas>
                </p>
            </article>

        </section>

    </main>
  );
}

export default HomePage;
