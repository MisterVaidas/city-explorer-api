import React from "react";

class Weather extends React.Component {
    render() {
        const { forecastData } = this.props;

        return (
            <div>
                {forecastData.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>Date: {data.date} </p>
                            <p>Description: {data.description} </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Weather;