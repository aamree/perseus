const React = require('react');

class SpeakerIcon extends React.Component {
    render() {
        return <svg
            viewBox="0 0 75 75"
            width={24}
            height={24}
        >
            <polygon
                id="polygon1"
                points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"  // eslint-disable-line
                style={{
                    stroke:'#111111',
                    strokeWidth:5,
                    strokeLinejoin:'round',
                    fill:'#111111',
                }}
            />
            <path id="path1"
                d="M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577"  // eslint-disable-line
                style={{
                    fill:'none',
                    stroke:'#111111',
                    strokeWidth:5,
                    strokeLinecap:'round',
                }}
            />
            <path id="path2"
                d="M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076"  // eslint-disable-line
                style={{
                    fill:'none',
                    stroke:'#111111',
                    strokeWidth:5,
                    strokeLinecap:'round',
                }}
            />
            <path id="path1"
                d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01"  // eslint-disable-line
                style={{
                    fill:'none',
                    stroke:'#111111',
                    strokeWidth:5,
                    strokeLinecap:'round',
                }}
            />
        </svg>;
    }
}

module.exports = SpeakerIcon;
