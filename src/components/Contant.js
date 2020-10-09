import React, { useEffect, useState } from 'react'
import "./Contact.css"
import contact from "./Resim/contact.png"
import Aos from "aos";
import "aos/dist/aos.css"


function Contant() {
    const [inputs,setInputs] = useState({ad:"",tarih1:"",eposta:"",tarih2:"",telefon:""})
    const [error,setError] = useState("Lütfen tüm alanları doldurunuz.")

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }
    const oldDate = () => {
        let time1 = parseInt(inputs?.tarih1.split("-").join(""))
        let date = new Date()
        let dateNow = date.toLocaleDateString("tr-TR")

        dateNow = parseInt(dateNow.split(".").reverse().join(""))

        return dateNow-time1
    }

    const newDate = () => {
        let time1 = parseInt(inputs?.tarih1.split("-").join(""))
        let time2 = parseInt(inputs?.tarih2.split("-").join(""))

        return time2-time1
    }

    useEffect(()=> {
        Aos.init({ duration:2000});
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(oldDate() > 0){
            alert("Geçmiş tarih seçilemez!")
            return
        }
        if(newDate() < 0)
        {
            alert("Çıkış tarihi giriş tarihinden önce olamaz.")
            return
        }

        if(!inputs.tarih1 || !inputs.eposta || !inputs.tarih2 || !inputs.telefon || !inputs.ad)
        {
            alert(error)
            
        }else{
            alert("İşlem tamamlandı.")
        }
    }
    
    return (
        <div className="contact">
            <img className="contact-img" src={contact} alt="contact"/>

            <div className="contact-title">
                <h1>İLETİŞİM</h1>
                <p>
                     Sizler de aşağıdaki formu doldurarak Hotel California'da tatil yapma keyfini çıkarabilirsiniz :)
                </p>
            </div>
        <form onSubmit={handleSubmit}> 
            <div className="contact-inputs"> 
                
                <div data-aos="fade-up"  className="c1">
                    <label> AD SOYAD</label>
                    <input name="ad" value={inputs.ad} type="text" onChange={(e)=>onChange(e)}></input>

                    <label> GİRİŞ TARİHİ</label>
                    <input name="tarih1" value={inputs.tarih1} type="date" onChange={(e)=>onChange(e)}></input>

                </div>
                <div data-aos="fade-up"  className="c1">

                    <label> E-POSTA</label>
                    <input name="eposta" value={inputs.eposta} type="text" onChange={(e)=>onChange(e)}></input>

                    <label> ÇIKIŞ TARİHİ</label>
                    <input name="tarih2" value={inputs.tarih2} type="date" onChange={(e)=>onChange(e)}></input>

                </div>
                <div data-aos="fade-up"  className="c1">
                    <label> TELEFON</label>
                    <input name="telefon" value={inputs.telefon} type="text" onChange={(e)=>onChange(e)}></input>

                    <button >GÖNDER</button>

                </div>
            </div>
            </form>
        </div>
        
        
    )
}

export default Contant
