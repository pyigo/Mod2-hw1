
// Sidebar
class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <h6>Dashborad</h6>
                <h6>Widget</h6>
                <h6>Reviews</h6>
                <h6>Customers</h6>
                <h6>Online Analysis</h6>
                <h6>Settings</h6>
            </div>
        )
    }
}

// Reviews
class Reviews extends React.Component {
    render() {
        return (
            <div>
                <h6>Reviews</h6>
                <h4>1,281</h4>
            </div>
        )
    }
}

// AverageRatings
class AverageRatings extends React.Component {
    render() {
        return (
            <div>
                <h6>Average Ratings</h6>
                <h4>4.6</h4>

            </div>
        )
    }
}

// SentimentAnalysis
class SentimentAnalysis extends React.Component {
    render() {
        return (
            <div>
                <h6>Sentiment Analysis</h6>
                <h4>960</h4>
                <h4>122</h4>
                <h4>321</h4>
            </div>
        )
    }
}

// WebsiteVisitors
class WebsiteVisitors extends React.Component {
    render() {
        return (
            <div>
                <h6>Website V</h6>
                <h4>821</h4>
            </div>
        )
    }
}
// App
class App extends React.Component {
    render() {
        return (
            <div class="container">
                <App />
                <Sidebar />
                <Reviews />
                <AverageRatings />
                <SentimentAnalysis />
                <WebsiteVisitors />
            </div>
        )
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('#main')
)