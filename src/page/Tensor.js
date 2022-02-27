
import React, {useEffect, useRef, useState} from 'react'
import soundURL from '../sound/song.mp3'
import LinearProgress  from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
const tf = require('@tensorflow/tfjs-backend-webgl')
const tf1 = require('@tensorflow/tfjs')
const mobilenet = require('@tensorflow-models/mobilenet');
const knnClassifier = require('@tensorflow-models/knn-classifier');
const {Howl} = require('howler');
let sound = new Howl({
  src: [soundURL],
});

const TOUCHED = 'touched'
const NOT_TOUCH = 'not_touch' 
const TRAINING_TIMES = 50

function Tensor() {
  const [ progress, setProgress ] = useState('')
  const [ isTraining, SetIsTraining ] = useState(false)
  const [ inProress, SetInProgress ] = useState(false)
  const [ labelTrain, SetLabelTrain ] = useState('')
  const video = useRef()
  const mbn = useRef()
  const classifier = useRef()

  useEffect(() => {
    init()
    // cleanup
    return () => {}
  },[])

  const init = async () => {
    await camera()
    SetInProgress(true)
    classifier.current = knnClassifier.create();
    console.log('classifier passed')  
    global.fetch = require('node-fetch')
    mbn.current = await mobilenet.load()
    console.log('mobilenet passed')
    SetInProgress(false)
  }

  const camera = () => {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia  
      if(navigator.getUserMedia) {
        navigator.getUserMedia(
          {video: true},
          stream => {
            video.current.srcObject = stream
            video.current.addEventListener('loadeddata', resolve())
          },
          error => reject(error)
        )
      }
      else {
        reject()
      }
    })
  }

  const train = async label => {
    await sleep (1000)
    SetInProgress(true)
    SetIsTraining(true)
    for (let i = 0; i < TRAINING_TIMES; i++ ) {
      let progressNum = parseInt((i+1) / TRAINING_TIMES * 100)
      document.querySelector('.progress-text').innerHTML =
        `Training ${progressNum}%`
        setProgress(progressNum)
      await training(label)
    }
    SetIsTraining(false)
    SetInProgress(false)
    await sleep(2000)
  }

  const training = label => {
    return new Promise( async resolve => {
      const emm = mbn.current.infer(
        video.current,
        true
      )
      classifier.current.addExample(emm,label)
      await sleep(100)
      resolve()
    })
  }
  const run = async () => {
    document.querySelector('.text-noti').classList.remove('hidden')
    document.querySelector('.tracking-button-container').classList.add('hidden')
    const emm = mbn.current.infer(
      video.current,
      true
    )
    const result = await classifier.current.predictClass(emm)
    
    if(result.label === TOUCHED && result.confidences[result.label] > 0.9) {
      document.title = 'bỏ tay raaaaaaaaaaaaaaaaaaaaa'
      document.querySelector('.video-track').classList.add('video-track-active')
      sound.play()
      sound.on('end', function(){
        console.log('Finished!');
      });
    }
    else 
    {
      document.querySelector('.video-track').classList.remove('video-track-active')
      document.title = 'Ncovid'
      sound.pause()
    }

    await sleep(200)

    run()
  }
  // promise có thể nằm trong vòng  for
  const sleep = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve,ms))
  }
  const handleProgress = (percent) => {
    setProgress(percent)
  }

  return (
    <div className='tracking-container'>
      <h1>hand tracking app</h1>
      <video className='video-track' autoPlay ref={video} />

      <div className={inProress ? `show-loading` : `hidden`}>
            <CircularProgress />
      </div>
      
      <div className={`tracking-button-container`}>

          <div className={inProress ? `hidden` : `button-progress-wrapper`}>
            <button className={isTraining ? 'btn disabled' : 'btn'} onClick={() => train(NOT_TOUCH)}>Training Step 1</button>
            <button className={isTraining ? 'btn disabled' : 'btn'} onClick={() => train(TOUCHED)}>Training Step 2</button>
            <button className={isTraining ? 'btn disabled' : 'btn'} onClick={() => run()}>Run</button>
          </div>
            
        <div className={isTraining ? `progress-container` : `hidden`}>
            <LinearProgress
              className='progress-bar'
              value= {progress}
              variant= 'determinate'
            />
            <p className='progress-text'></p>
        </div>

      </div>
      <p className='text-noti hidden'>beware of your hands...</p>
      
      <div className="howto-container">
        <h1>You dont know how to use this thing? <br /> let me show you this trick</h1>
        <div className="howto-content">
          <h1>
            Step one
          </h1>
          <p>
            press the button "Training Step 1", and remember dont show your hands on the camera until the progess is done
          </p>
        </div>

        <div className="howto-content">
          <h1>
            Step two
          </h1>
          <p>
            press the button "Training Step 2",you need to show your hands in front of the camera to help the machine learning that action
          </p>
        </div>

        <div className="howto-content">
            <h1>
              Final
            </h1>
            <p>
              you press Run to complete the training and ready to use the app, thank you for attention!
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default Tensor

