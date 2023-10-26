import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import img1 from "../assets/macbook.jpg";



// const Check = () => {

//   console.log("i am check");
//   const [model, setModel] = useState(null);
      

   
        
//         // Load the pre-trained model when the component mounts
//         useEffect(() => {
//           async function loadModel() { 
//             const loadedModel = await tf.loadLayersModel("../../public/model.json"); // Replace with the actual path to your model.json file
//             setModel(loadedModel);
//           }
//           loadModel();
//         }, []);

      

//       const preprocessImage = async (imageElement) => {
//         const tfImage = tf.browser.fromPixels(imageElement); // Convert the image to a tensor
//         const resizedImage = tf.image.resizeBilinear(tfImage, [224, 224]); // Resize to model input size
//         const normalizedImage = resizedImage.div(255.0); // Normalize to [0, 1]
//         return normalizedImage;
//       };

//       const classifyImage = async (imageData) => {
//         if (model) {
//           // Preprocess the image data (e.g., resizing, normalizing) before prediction
//           // Make sure imageData is in a format that the model expects
    
//           // Perform image classification
//           const predictions = model.predict(imageData);
    
//           // Handle the predictions as needed
//           console.log(predictions);
//         }
//       };

//   const img2 = preprocessImage(img);
//   classifyImage(img2);
  


//     }

    const check = () => {

      console.log("i am check");
      // const [model, setModel] = useState(null);
          
    
      var  imageElement={img1};
      console.log(imageElement);
      // const img = new Image();
      // img.src = '../assets/macbook.jpg';
      // console.log(img);
      // <img id = "imgID1" src={img1} alt="img1" />;
            
            // Load the pre-trained model when the component mounts
            var loadedModel;
              const loadModel=async function() { 
                try {
                  loadedModel = await tf.loadLayersModel("/model.json");
                  console.log("Model loaded successfully");
                } catch (error) {
                  console.error("Error loading the model:", error);
                  // console.log("hello");
                }
                console.log("hello");
                // imageElement =document.getElementById('imgID1'); 
                // console.log(imageElement);
                // Replace with the actual path to your model.json file
              };
            // loadModel();
          loadModel();
        
          const preprocessImage = async (imageElement) => {
            console.log("preprocessstart");
            const tfImage = tf.browser.fromPixels(imageElement); // Convert the image to a tensor
            const resizedImage = tf.image.resizeBilinear(tfImage, [224, 224]); // Resize to model input size
            const normalizedImage = resizedImage.div(255.0); // Normalize to [0, 1]
            console.log("preprocessend");
            return normalizedImage;
          };
          //
          const classifyImage = async (img2) => {
            
            if (loadedModel) {
              // Preprocess the image data (e.g., resizing, normalizing) before prediction
              // Make sure imageData is in a format that the model expects
        
              // Perform image classification
              const predictions = loadedModel.predict(img2);
        
              // Handle the predictions as needed
              console.log(predictions);
            }
          };

          if (imageElement) {
            console.log("image element exists");
            if (imageElement.complete) {
              
              const img2 = preprocessImage(imageElement);
              classifyImage(loadedModel, img2);
            } else {
              console.log("8");
              imageElement.onload = function () {
                const img2 = preprocessImage(imageElement);
                classifyImage(loadedModel, img2);
              };
              console.log("7");
            }
          } else {
            console.error("Image element not found.");
          }






          //
         
          // const img2 = preprocessImage(imageElement);
         
    
     
      // classifyImage(img2);
      
    
    
        }

export default check;