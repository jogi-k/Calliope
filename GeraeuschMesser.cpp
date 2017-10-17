#define _GNU_SOURCE

#include "MicroBit.h" 
#include <array>
#include <stdlib.h>
MicroBit uBit;


int initTime = uBit.systemTime(); 

double MicroInput;
int main() 
{
    uBit.init();
    MicroInput = 0;
    uBit.display.setDisplayMode(DISPLAY_MODE_GREYSCALE);
    while ( true ) {
        uBit.display.print(MicroBitImage("0,0,0,0,0\n0,255,0,255,0\n0,0,0,0,0\n255,0,0,0,255\n0,255,255,255,0\n"));
        uBit.rgb.setColour(MicroBitColor(51, 204, 0, 255));
        MicroInput = uBit.io.P21.getMicrophoneValue();
        if ( MicroInput > 30 ) {
            uBit.display.print(MicroBitImage("0,0,0,0,0\n0,255,0,255,0\n0,0,0,0,0\n0,255,255,255,0\n255,0,0,0,255\n"));
            uBit.rgb.setColour(MicroBitColor(255, 0, 0, 255));
            uBit.sleep(1000);
        }
        uBit.sleep(1);
    }
    release_fiber();
}
