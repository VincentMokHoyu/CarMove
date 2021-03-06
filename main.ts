//% weight=0 color=#3CB371 icon="\uf36e" block="CarMove"
namespace CarMove{
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="Left Move Forward" block="Left Move Forward %Speed"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function LeftMoveForward(speed: number): void {
        let buf = pins.createBuffer(5);
        
buf[0] = 6 + 4 * 12
        
buf[1] = 0 & 0xff
        
buf[2] = (0 >> 8) & 0xff
        
buf[3] = 4095 & 0xff
        
buf[4] = (4095 >> 8) & 0xff
        
pins.i2cWriteBuffer(0x41, buf, false)
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
}
