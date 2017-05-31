'use strict';

var app = app || {};

(function(module) {
  const sunView = {};

  sunView.translateBC = (angle) => {
    let transX = Math.sin(angle);
    let transY = -1*Math.cos(angle);
    $(`.BC`).css({'top':'calc('+transY+' * 25vh)', 'left':'calc('+transX+' * 25vh)'});
    app.sunView.translateR();
  };

  sunView.translateR = (angle) => {
    let transX = Math.sin(angle);
    let transY = -1*Math.cos(angle);
    $(`.R`).css({'top':'calc('+transY+' * 25vh)', 'left':'calc('+transX+' * 25vh)'});
    app.translateU();
  };

  sunView.translateU = (angle) => {
    let transX = Math.sin(angle);
    let transY = -1*Math.cos(angle);
    $(`.U`).css({'top':'calc('+transY+' * 25vh)', 'left':'calc('+transX+' * 25vh)'});
    app.translateS();
  };

  sunView.translateS = (angle) => {
    let transX = Math.sin(angle);
    let transY = -1*Math.cos(angle);
    $(`.S`).css({'top':'calc('+transY+' * 25vh)', 'left':'calc('+transX+' * 25vh)'});
    app.translateEC();
  };

  sunView.translateEC = (angle) => {
    let transX = Math.sin(angle);
    let transY = -1*Math.cos(angle);
    $(`.EC`).css({'top':'calc('+transY+' * 25vh)', 'left':'calc('+transX+' * 25vh)'});
    app.sunView.keyframesOrbit();
  };

  sunView.translateCur = (angle) => {
    let transX = Math.sin(angle);
    let transY = -1*Math.cos(angle);
    $(`.Cur`).css({'top':'calc('+transY+' * 25vh)', 'left':'calc('+transX+' * 25vh)'});
  };

  sunView.keyframesOrbit = () =>{
    // let transX = Math.sin(angle);
    // let transY = -Math.cos(angle);
    $.keyframe.define({
      name: 'orbit',
      from: {
        'transform':'rotate(0deg) rotate(0deg)'
      },
      to: {
        'transform':'rotate(360deg) rotate(-360deg)'
      }
    });
  };

  module.sunView = sunView;
}(app));
