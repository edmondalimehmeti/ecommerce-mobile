package com.convention.staffing; // replace com.your-app-name with your app’s name

import android.content.res.Configuration;
import android.content.res.Resources;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Locale;

public class CLanguageModule extends ReactContextBaseJavaModule {
    CLanguageModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CLanguageModule";
    }

    @ReactMethod
    public void changeLanguage(String lang) {
        if (lang.equals("al")) {
            setLang("sq");
        } else {
            setLang("en");
        }
    };

    public void setLang(String langTag) {
        Locale locale = new Locale(langTag);
        Locale.setDefault(locale);
        if (getCurrentActivity() != null) {
            Resources resources = getCurrentActivity().getResources();
            Configuration config = resources.getConfiguration();
            config.setLocale(locale);
            resources.updateConfiguration(config, resources.getDisplayMetrics());
        }
    }
}
