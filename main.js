Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '">';
    })
    document.getElementById("preName1").innerHTML = "";
    document.getElementById("preName2").innerHTML = "";
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Hh-BnbZVH/model.json", modelloaded);

function modelloaded() {
    console.log("Model Loaded!");
}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, got_result);
}

function got_result(error, results) {
    if (error) {
        console.error(error, "!");
    } else {
        console.log(results);
        document.getElementById("preName1").innerHTML = results[0].label;
        document.getElementById("preName2").innerHTML = results[1].label;

        Prediction_1 = results[0].label;
        Prediction_2 = results[1].label;
        speak();

        if (results[0].label == "Thumb's Up") {
            document.getElementById("preEmoji1").innerHTML = "👍";
        }
        if (results[0].label == "Cheez") {
            document.getElementById("preEmoji1").innerHTML = "✌";
        }
        if (results[0].label == "Beautiful") {
            document.getElementById("preEmoji1").innerHTML = "👌";
        }
        if (results[0].label == "Yo Yo") {
            document.getElementById("preEmoji1").innerHTML = "✌";
        }
        if (results[0].label == "Beautiful") {
            document.getElementById("preEmoji1").innerHTML = "👌";
        }
        

        if (results[1].label == "Thumb's Up") {
            document.getElementById("preEmoji2").innerHTML = "👍";
        }
        if (results[1].label == "Cheez") {
            document.getElementById("preEmoji2").innerHTML = "✌";
        }
        if (results[1].label == "Beautiful") {
            document.getElementById("preEmoji2").innerHTML = "👌";
        }
        if (results[1].label == "Yo Yo") {
            document.getElementById("preEmoji2").innerHTML = "✌";
        }
        if (results[1].label == "Beautiful") {
            document.getElementById("preEmoji2").innerHTML = "👌";
        }
    }
}