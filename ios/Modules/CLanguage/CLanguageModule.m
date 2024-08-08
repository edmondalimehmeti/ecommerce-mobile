//
//  CLanguageModule.m
//  POK
//
//  Created by Maks on 9.12.21.
//

#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CLanguageModule, NSObject)

RCT_EXTERN_METHOD(changeLanguage:(NSString *)lang)

@end

