import React, { useEffect } from 'react'
import "./Comment.css"
import commentsbg from "./Resim/commentsbg.png";
import comment1 from "./Resim/comment1.png"
import comment2 from "./Resim/comment2.png"
import Aos from "aos";
import "aos/dist/aos.css"



function Comment() {


    useEffect(()=> {
        Aos.init({ duration:2000});
    }, [])
    return (
        <div className="comment">
            <img className="comment-img" src={commentsbg} alt="comment"/>

            <div className="comment-title">
                <h1> ZİYARETÇİ YORUMLARI</h1>
                <p>
                     Aşağıda otelimizi ziyaret eden kıymetli misafirlerimizin yorumlarını bulabilirsiniz.
                </p>
            </div>

            <div className="comment-container">

                <div className="comments">
                    <div data-aos="fade-up" className="comment-w">
                        
                        <img className="comments-img" src={comment1} alt="comment"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                            magna, laoreet in nibh eget.
                        </p>

                    </div>
                    <div  data-aos="fade-up" className="comment-w">
                        
                        <img className="comments-img" src={comment1} alt="comment"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                            magna, laoreet in nibh eget.
                        </p>

                    </div>
                    <div   data-aos="fade-up"className="comment-w">
                        
                        <img className="comments-img" src={comment1} alt="comment"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                            magna, laoreet in nibh eget.
                        </p>

                    </div>

                </div>

                <div className="comments">
                    <div data-aos="fade-up" className="comment-w">
                        
                        <img className="comments-img" src={comment2} alt="comment"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                            magna, laoreet in nibh eget.
                        </p>

                    </div>
                    <div data-aos="fade-up" className="comment-w">
                        
                        <img className="comments-img" src={comment2} alt="comment"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                            magna, laoreet in nibh eget.
                        </p>

                    </div>
                    <div data-aos="fade-up" className="comment-w">
                        
                        <img className="comments-img" src={comment2} alt="comment"/>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla
                            magna, laoreet in nibh eget.
                        </p>

                    </div>


                </div>

                
            </div>


        <div  data-aos="flip-right" className="comment-b">
            <button className="comment-button">Diğer Yorumlar</button>
        </div>


            
        </div>
    )
}

export default Comment
