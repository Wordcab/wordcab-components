async function init () {

    var summary, transcript

    await fetch('summary.json')
        .then(response => response.json())
        .then(data => { summary = data })
        .catch(err => console.error(err));

    await fetch('transcript.json')
        .then(response => response.json())
        .then(data => { transcript = data })
        .catch(err => console.error(err));

    const myWordcab = new wordcab({
        audioPath: 'frost_nixon_sample.mp3',
        summaryData: summary,
        transcriptData: transcript
    });
}

init();