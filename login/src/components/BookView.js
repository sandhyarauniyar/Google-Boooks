import react from 'react';
import './BookView.css';

export default function BookView(){
    const google = window.google;

    google.books.load();

    function initialize() {
      var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
      viewer.load('ISBN:9780596527754');
    }

    google.books.setOnLoadCallback(initialize);

    return (
        <div>
        <div>Anshika</div>
        <div id="viewerCanvas" />
        </div>
    );
}