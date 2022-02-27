import React, { useEffect } from 'react'
import symp from '../img/symptoms2.svg'
import dizzy from '../img/dizziness.png'
import diff from '../img/difficulty-breathing.png'
import cough from "../img/cough.png"
import taste from "../img/loss-of-sense-of-taste.png"
import smell from "../img/smell.png"
function Symtoms() {
    
  return (
      <div>
        <div className="symptoms-container">
            <div className="symptoms-info">
                <p className="title-alert">
                    Covid-19 Symptoms
                </p>
                <h1 className="symptoms-title">
                        What are the symptoms?
                </h1>
                <div className="symptoms-desc">
                    <p>COVID-19 symptoms range from mild to severe. It takes 2-14 days after exposure for symptoms to develop. Symptoms may include:COVID-19 symptoms range from mild to severe. It takes 2-14 days after exposure for symptoms to develop. Symptoms may include:</p>
                </div>
                <div className="symptoms-table">
                    <table>
                        <tbody>

                        <tr>
                            <td>
                                <i className="fa-solid fa-circle-check green"></i>
                                Hard cough
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check green"></i>
                                Resoiratory Distress
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa-solid fa-circle-check green"></i>
                                Fever
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check green"></i>
                                Shortness of Breath
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="fa-solid fa-circle-check green"></i>
                                Headache
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check green"></i>
                                Kidney Failure
                            </td>
                        </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            <div className="symptoms-img">
                <img src={symp} alt=""/>
            </div>

        </div>

        <div className="sequelae-container">
            <p className="title-alert">
                Sequelae of Covid-19 
            </p>
            <div className="sequelae-title">
                <h1>Các triệu chứng phổ biến hậu covid</h1>
            </div>
            <div className="sequelae-icon-list">
                <div className="sequelae-icon-item">
                    <img src={diff} alt=""/>
                    <p>khó thở</p>
                </div>
                <div className="sequelae-icon-item">
                    <img src={dizzy} alt=""/>
                    <p>Chóng mặt</p>
                </div>
                <div className="sequelae-icon-item">
                    <img src={cough} alt=""/>
                    <p>Ho khan</p>
                </div>
                <div className="sequelae-icon-item">
                    <img src={taste} alt=""/>
                    <p>Mất vị</p>
                </div>
                <div className="sequelae-icon-item">
                    <img src={smell} alt=""/>
                    <p>Mất mùi</p>
                </div>
            </div>
            
        </div>
      </div>
  )
}

export default Symtoms