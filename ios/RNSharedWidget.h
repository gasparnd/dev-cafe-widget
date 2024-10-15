//
//  RNSharedWidget.h
//  rndevwidget
//
//  Created by Gaspar Dolcemascolo on 12/10/2024.
//

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif


@interface RNSharedWidget : NSObject <RCTBridgeModule>

@end
