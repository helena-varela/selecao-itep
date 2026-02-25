'use client';
import { useEffect, useRef } from 'react';

export default function Home() {
  const ponteiroHora = useRef(null);
  const ponteiroMinuto = useRef(null);
  const ponteiroSegundo = useRef(null);

  useEffect(() => {
    function relogio() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
      const secondDeg = ((seconds / 60) * 360) + 90;
      const minuteDeg = ((minutes / 60) * 360) + 90;
      const hourDeg = ((hours / 12) * 360) + 90;
      
      if (ponteiroSegundo.current) {
        ponteiroSegundo.current.style.transform = `rotate(${secondDeg}deg)`;
      }
      if (ponteiroMinuto.current) {
       ponteiroMinuto.current.style.transform = `rotate(${minuteDeg}deg)`;
      }
      if (ponteiroHora.current) {
        ponteiroHora.current.style.transform = `rotate(${hourDeg}deg)`;
      }
    }

    relogio();

  }, []);

  return (
    <div className="tela">
      <div className="relogio">
        <div className="relogio-numeros">
          <div className="numero numero1">1</div>  
          <div className="numero numero2">2</div>  
          <div className="numero numero3">3</div>  
          <div className="numero numero4">4</div>  
          <div className="numero numero5">5</div>  
          <div className="numero numero6">6</div>  
          <div className="numero numero7">7</div>  
          <div className="numero numero8">8</div>  
          <div className="numero numero9">9</div>  
          <div className="numero numero10">10</div>  
          <div className="numero numero11">11</div>  
          <div className="numero numero12">12</div>
          <div ref={ponteiroHora} className="ponteiro ponteiro-hora"></div>
          <div ref= {ponteiroMinuto} className="ponteiro ponteiro-minuto"></div>
          <div ref={ponteiroSegundo} className="ponteiro ponteiro-segundo"></div> 
        </div>
      </div>
    </div>
  );
}