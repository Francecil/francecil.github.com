(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1011:function(a,e,n){"use strict";n.r(e);var t=n(27),i=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_2016-04-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2016-04-13"}},[a._v("#")]),a._v(" "),e("strong",[a._v("2016/04/13")])]),a._v(" "),e("h2",{attrs:{id:"hello-jni项目-基于android-studio-2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-jni项目-基于android-studio-2-0"}},[a._v("#")]),a._v(" hello-jni项目(基于android studio 2.0)")]),a._v(" "),e("p",[e("em",[a._v("(as2.2+ 可以用cmake 其实现,非常简单 不用.h文件\n一开始的配置见 http://tools.android.com/tech-docs/external-c-builds\n后面只要写个native方法 c文件中写对应的函数即可\n)")])]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("配置NDK")]),a._v("\n如果没下载NDK的话")])]),a._v(" "),e("blockquote",[e("p",[a._v("File->Settings\nAppearance & Behavior->System Settings ->Android SDK 右侧选择SDK Tools 勾选NDK更新\n勾上更新重启项目。")])]),a._v(" "),e("p",[e("code",[a._v("local.properties")]),a._v("里面如果没自动配置的话就这样配置(按上述步骤安装ndk 其目录就在sdk下)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("## This file is automatically generated by Android Studio.\n# Do not modify this file -- YOUR CHANGES WILL BE ERASED!\n#\n# This file must *NOT* be checked into Version Control Systems,\n# as it contains information specific to your local configuration.\n#\n# Location of the SDK. This is only used by Gradle.\n# For customization when using a Version Control System, please read the\n# header note.\n#Wed Apr 13 00:40:11 CST 2016\nndk.dir=E\\:\\\\BaiduYunDownload\\\\adt-bundle-windows-x86_64-20140702\\\\sdk\\\\ndk-bundle\nsdk.dir=E\\:\\\\BaiduYunDownload\\\\adt-bundle-windows-x86_64-20140702\\\\sdk\n")])])]),e("ul",[e("li",[e("p",[a._v("新建Project，一个"),e("code",[a._v("Activity（xml中带一个TextView）")])])]),a._v(" "),e("li",[e("p",[a._v("新建一个"),e("code",[a._v("NdkJniUtils")]),a._v("类\n声明原生方法"),e("code",[a._v("getCString();")])]),a._v(" "),e("p",[a._v("public class NdkJniUtil {\npublic native String getCString();\n}")])]),a._v(" "),e("li",[e("p",[a._v("生成C/C++ 头文件")])])]),a._v(" "),e("p",[a._v("法1：\nIDE:Build->MakeProject 得到class\n编译之后的class在目录下")]),a._v(" "),e("blockquote",[e("p",[a._v("E:\\AndroidTemp\\JNIProject\\app\\build\\intermediates\\classes\\debug")])]),a._v(" "),e("p",[a._v("然后我们cd到这边")]),a._v(" "),e("blockquote",[e("p",[a._v("E:\\AndroidTemp\\JNIProject\\app\\build\\intermediates\\classes\\debug>\njavah -jni com.france.jniproject.NdkJniUtil")])]),a._v(" "),e("p",[a._v("执行完后可以看到在debug下生成的"),e("code",[a._v("com_france_jniproject_NdkJniUtil.h")])]),a._v(" "),e("p",[e("strong",[a._v("法2(推荐，复制命令操作速度快)")]),a._v("：\n法1生成class后\n"),e("strong",[a._v('可以不用cmd,而是采用as的，View->Tool Windows->Terminal"，即在Studio中进行终端命令行工具')]),a._v("\n然后进入")]),a._v(" "),e("blockquote",[e("p",[a._v("E:\\AndroidTemp\\JNIProject\\app\\src\\main>")])]),a._v(" "),e("p",[a._v("执行javah命令，为的是生成的 .h 文件同样是在"),e("Project",[a._v("\\app\\src\\main路径下(jni下面)，可以在Studio的工程结构中直接看到。\n操作命令：")])],1),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("//-d jni 表示生成名为jni的目录\n\njavah -d jni -classpath <SDK_android.jar>;<APP_classes> <class>\n")])])]),e("p",[a._v("即")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("//<SDK_android.jar>看个人存放在哪\njavah -d jni -classpath E:\\BaiduYunDownload\\adt-bundle-windows-x86_64-20140702\\sdk\\platforms\\android-23\\android.jar;..\\..\\build\\intermediates\\classes\\debug com.france.jniproject.NdkJniUtil\n")])])]),e("p",[a._v("然后就看到"),e("code",[a._v("<project>\\app\\src\\main\\jni\\com_france_jniproject_NdkJniUtil.h")]),a._v("出现了.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('/* DO NOT EDIT THIS FILE - it is machine generated */\n#include <jni.h>\n/* Header for class com_france_jniproject_NdkJniUtil */\n\n#ifndef _Included_com_france_jniproject_NdkJniUtil\n#define _Included_com_france_jniproject_NdkJniUtil\n#ifdef __cplusplus\nextern "C" {\n#endif\n// Class:     com_france_jniproject_NdkJniUtil\n// Method:    getCString\n// Signature: ()Ljava/lang/String;\n// JniEnv: 指向可用JNI函数表的接口指针\n// jobject: NdkJniUtil类实例的Java对象引用\n\nJNIEXPORT jstring JNICALL Java_com_france_jniproject_NdkJniUtil_getCString\n        (JNIEnv *, jobject);\n#ifdef __cplusplus\n}\n#endif\n#endif\n')])])]),e("ul",[e("li",[e("p",[a._v("在main目录下新建jni目录放入.h文件 并新建c文件(名字随意)")]),a._v(" "),e("p",[a._v('#include "com_france_jniproject_NdkJniUtil.h"\nJNIEXPORT jstring JNICALL Java_com_france_jniproject_NdkJniUtil_getCString\n(JNIEnv *env, jobject obj){\nreturn (*env)->NewStringUTF(env,"This just a test for Android Studio NDK JNI developer!");\n}')]),a._v(" "),e("p",[a._v("方法名复制.h的")])]),a._v(" "),e("li",[e("p",[a._v("配置gradle(app)\n在"),e("code",[a._v("defaultConfig {}")]),a._v("加入")]),a._v(" "),e("p",[a._v('ndk{\nmoduleName "gahing"//生成的so名字\nabiFilters "armeabi", "armeabi-v7a", "x86"\t//输出指定三种abi体系结构下的so库。目前可有可无。\n}')])]),a._v(" "),e("li",[e("p",[a._v("Build -> make Module 'app'生成so库")])]),a._v(" "),e("li",[e("p",[a._v("我们AS是不需要添加Application.mk和Android.mk到jni目录下\n如果是Eclipse的话就下面这样配置")])])]),a._v(" "),e("p",[a._v("Application.mk")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("APP_PROJECT_PATH := $(call my-dir)/project\nAPP_MODULES      := nativebt\n")])])]),e("p",[a._v("Android.mk")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("LOCAL_PATH := $(call my-dir)\ninclude $(CLEAR_VARS)\n\nLOCAL_MODULE    := gahing\nLOCAL_SRC_FILES :=  jnitest.c\n\nLOCAL_DEFAULT_CPP_EXTENSION := cpp\n\n#include $(BUILD_EXECUTABLE)\ninclude $(BUILD_SHARED_LIBRARY)\n")])])]),e("p",[a._v("生成的so库我们可以在")]),a._v(" "),e("blockquote",[e("p",[a._v("E:\\AndroidTemp\\JNIProject\\app\\build\\intermediates\\ndk\\debug\\lib")])]),a._v(" "),e("p",[a._v('找到，我们发现有7种版本，如果gradle里面配置abiFilters "armeabi", "armeabi-v7a", "x86"   就只剩这3种')]),a._v(" "),e("p",[a._v("参考：http://blog.csdn.net/sodino/article/details/41946607")]),a._v(" "),e("p",[a._v("现在有了so库，我们直接引用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class NdkJniUtil {\n    public native String getCString();\n\n    static {\n        System.loadLibrary("gahing");\n    }\n}\n')])])]),e("p",[a._v("然后编译就可以运行了。\nMainActivity")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("public class MainActivity extends AppCompatActivity {\n    TextView textView;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        textView = (TextView) findViewById(R.id.text);\n        NdkJniUtil ndkJniUtil = new NdkJniUtil();\n        textView.setText(ndkJniUtil.getCString());\n    }\n}\n")])])]),e("blockquote",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("   //参考:http://yanbober.github.io/2015/02/14/android_studio_jni_1/\n    //Android C++高级编程\n")])])])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"内存泄漏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏"}},[a._v("#")]),a._v(" 内存泄漏")]),a._v(" "),e("p",[a._v("通过"),e("code",[a._v("JNI GetStringChars(env,javaString,&isCopy)")]),a._v(" 函数和"),e("code",[a._v("GetStringUTFChars")]),a._v(" 获得的C字符串在原生代码中使用完后需要正确释放\n通过："),e("code",[a._v("(*env)->ReleaseString（UTF）Chars(env,javaString,str)")]),a._v("释放\n同理，数组操作也需要释放指针")]),a._v(" "),e("h3",{attrs:{id:"nio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nio"}},[a._v("#")]),a._v(" NIO")]),a._v(" "),e("p",[a._v("创建直接字节缓冲区")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("unsigned char* buffer = (unsigned char*) malloc(1024);\n...\njobject directBuffer;\ndirectBuffer = (*env)->NewDirectByteBuffer(env,buffer,1024);\n//注意释放内存\n")])])]),e("p",[a._v("通过Java字节缓冲区获取原生字节数组")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("unsigned char* buffer；\nbuffer = (unsigned char*) (*env)->GetDirectByteBuffer(env,directBuffer);\n")])])]),e("p",[e("strong",[a._v("(即 原生方法的内存分配超出虚拟机的管理范围)")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"访问域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问域"}},[a._v("#")]),a._v(" 访问域")]),a._v(" "),e("p",[a._v("原生方法获取Java对象属性及方法的值")]),a._v(" "),e("p",[a._v("获取域值需要调用2到3个的JNI函数：\n用对象引用instance获得类")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("jclass clazz=(*env)->GetObjectClass(env,instance)\n")])])]),e("p",[a._v("获取实例域(静态域)的域ID")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v(' jfieldID=(*env)->Get(Static)FieldID(env,clazz,变量名,"L/java/lang/String" 类型签名映射  );\n')])])]),e("p",[a._v("获取实例域/静态域")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("jstring(返回值类型)=(*env)->GetObjectField(env,insrance(java引用对象),对应id)\n")])])]),e("p",[a._v("原生方法获取Java对象方法")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('jmethodID methodID = (*env)->Get(Static)MethodID(env,clazz,方法名," 类型签名映射 ");\njstring(返回值类型)=(*env)->Call(Static)String(与返回值类型对应)Method(env,insrance(java引用对象),对应id);\n')])])]),e("p",[e("strong",[a._v("就为了回到Java里面拿值,要进行这么多操作 增加额外负担 一般所有需要的参数都直接传递给原生方法,不用在回到Java中\n如果真的要这么做，需要缓存最频繁使用的ID")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("Java类型签名映射\n")])])]),e("p",[a._v("JNI使用Java虚拟机的类型签名表述。下表列出了这些类型签名：")]),a._v(" "),e("blockquote",[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("类型签名\t \t                Java 类型\t \nZ\t \t                        boolean\t \nB\t \t                        byte\t \nC\t \t                        char\t \nS\t \t                        short\t \nI\t \t                        int\t \nJ\t \t                        long\t \nF\t \t                        float\t \nD\t \t                        double\t \nL fully-qualified-class ;\t \t全限定的类\t \n[ type\t \t                type[]\t \n( arg-types ) ret-type\t \t方法类型\n")])])])]),a._v(" "),e("p",[a._v("手工映射略麻烦,采用javap工具\n命令行模式：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('E:\\AndroidTemp\\JNIProject\\app\\build\\intermediates\\classes\\debug>javap  -p -s com.france.jniproject.NdkJniUtil\nCompiled from "NdkJniUtil.java"\npublic class com.france.jniproject.NdkJniUtil {\n  public com.france.jniproject.NdkJniUtil();\n    Signature: ()V\n\n  public native java.lang.String getCString();\n    Signature: ()Ljava/lang/String;\n\n  static {};\n    Signature: ()V\n}\n')])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"_2016-04-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2016-04-14"}},[a._v("#")]),a._v(" "),e("strong",[a._v("2016/04/14")])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"异常处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[a._v("#")]),a._v(" 异常处理")]),a._v(" "),e("p",[a._v("Java中，抛出异常时，JVM停止运行代码并尝试捕获异常，进去异常处理程序\nJNI需要开发人员在异常发生后显式实现异常处理流")]),a._v(" "),e("h3",{attrs:{id:"捕获异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#捕获异常"}},[a._v("#")]),a._v(" 捕获异常")]),a._v(" "),e("blockquote",[e("p",[a._v("如下NdkJniUtil定义一个抛出异常的方法")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public class NdkJniUtil {\n    private void throwingMethod() throws NullPointerException{\n        throw new NullPointerException("this is NullPointerException");\n    }\n}\n')])])]),e("blockquote",[e("p",[a._v("获取到jmethodID后， 执行该函数使之产生异常")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("(*env)->CallVoidMethod(env,instance,jmethodID);\njthrowable ex=(*env)->ExceptionOccurred(env);\n//通过调用函数ExceptionOccurred()来获得异常对象，它含有对错误情况的更详细说明\nif(0!=ex){\n//说明产生异常开始处理\n//处理方式\n//    \n}\n")])])]),e("blockquote",[e("p",[a._v("可用两种方法来处理平台相关代码中的异常：")])]),a._v(" "),e("ul",[e("li",[a._v("本地方法可选择立即返回，使异常在启动该本地方法调用的Java代码中抛出。")]),a._v(" "),e("li",[a._v("平台相关代码可通过调用ExceptionClear() 来清除异常，然后执行自己的异常处理代码。"),e("code",[a._v("(*env)->ExceptionClear(env);")])])]),a._v(" "),e("blockquote",[e("p",[a._v("抛出了某个异常之后，平台相关代码必须先清除异常，然后才能进行其它的JNI调用。")]),a._v(" "),e("p",[a._v("当有待定异常时，只有以下这些JNI函数可被\n安全地调用：ExceptionOccurred()、ExceptionDescribe()和ExceptionClear()。")]),a._v(" "),e("p",[a._v("ExceptionDescribe()函数将打印有关待定异常的 调试消息。")])]),a._v(" "),e("h3",{attrs:{id:"抛出异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抛出异常"}},[a._v("#")]),a._v(" 抛出异常")]),a._v(" "),e("blockquote",[e("p",[a._v("JNI允许原生代码抛出异常")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('//获得异常类\njclass clazz=(*env)->FindClass(env,"java/lang/NullPointerException");\n//ThrowNew来初始化且抛出新异常\nif(0!=clazz){\n    (*env)->ThrowNew(env,clazz,"this is NullPointerException");\n}\n')])])]),e("blockquote",[e("p",[a._v("原生代码不受VM控制，抛出的异常不会停止原生函数的执行")]),a._v(" "),e("p",[a._v("此时应该释放所有已分配的原生资源(内存泄漏),例如内存及合适的返回值")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("而通过JNIEnv接口获取的引用,如果是局部引用当原生函数返回，他们自动被VM释放(具体参考下一节)\n")])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"局部和全局引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局部和全局引用"}},[a._v("#")]),a._v(" 局部和全局引用")]),a._v(" "),e("h3",{attrs:{id:"局部引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局部引用"}},[a._v("#")]),a._v(" 局部引用")]),a._v(" "),e("blockquote",[e("p",[a._v("对象是被作为局部引用传递给本地方法的\n大部分JNI函数返回的都是局部引用，由JNI函数返回的所有Java对象都是局部引用\n局部引用不能在后续的调用中被缓存及重用("),e("strong",[a._v("使用期限仅在原生方法")]),a._v(")\n局部引用"),e("strong",[a._v("仅在创建它们的线程中有效")]),a._v("。本地方法不能将局部引用从一个线程 传递到另一个线程中\n例如上一节我们通过FindClass得到一个局部引用(异常类clazz) 当原生方法返回,它自动被释放")]),a._v(" "),e("p",[a._v("也可以用"),e("code",[a._v("(*env)->DeleteLocalRef(env,clazz);")]),a._v("显式释放")])]),a._v(" "),e("p",[e("strong",[a._v("注：一般让VM去自动释放局部引用，以下情景考虑手动释放")])]),a._v(" "),e("ul",[e("li",[a._v("本地方法要访问一个大型Java对象，于是创建了对该Java对象的局部引用。然后，本地方法要在返回调用程序之前执行其它计算。 "),e("em",[a._v("对这个大型Java对象的局部引用将防止该对象被当作垃圾收集")]),a._v("，即使在剩余的运算中并不再需要该对象。")]),a._v(" "),e("li",[a._v("本地方法创建了大量的局部引用，但这些局部引用并不是要同时使用。由于虚拟机需要一定的空间来跟踪每个局部引用， 创建太多的局部引用将可能使系统耗尽内存。 例如，"),e("em",[a._v("本地方法要在一个大型对象数组中循环，把取回的元素作为局部引用， 并在每次迭代时对一个元素进行操作。每次迭代后，程序员不再需要对该数组元素的局部引用")]),a._v("。")])]),a._v(" "),e("blockquote",[e("p",[e("code",[a._v("so,当内存密集型操作时最好删除无用的局部引用,当然也可以用EnsureLocalCapacity去申请更多的局部引用槽(如果内存足够的话)")])])]),a._v(" "),e("h4",{attrs:{id:"局部引用的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局部引用的实现原理"}},[a._v("#")]),a._v(" 局部引用的实现原理")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("为了实现局部引用，Java虚拟机为每个从Java到本地方法的控制转换都创建了注册服务程序。注册服务程序将不可移动的局部引用 映射为Java对象，并防止这些对象被当作垃圾收集。所有传给本地方法的Java对象（包括那些作为JNI函数调用结果返回的对象）将 被自动添加到注册服务程序中。本地方法返回后，注册服务程序将被删除，其中的所有项都可以被当作垃圾来收集。可用各种不同的 方法来实现注册服务程序，例如，使用表、链接列表或hash表来实现。虽然引用计数可用来避免注册服务程序中有重复的项，但JNI 实现不是必须检测和消除重复的项。注意，以保守方式扫描本地堆栈并不能如实地实现局部引用。平台相关代码可将局部引用储存在 全局或堆数据结构中。\n")])])]),e("h3",{attrs:{id:"全局引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局引用"}},[a._v("#")]),a._v(" 全局引用")]),a._v(" "),e("blockquote",[e("p",[a._v("全局引用将一直有效，直到被显式释放(强引用,不注意释放可能导致内存溢出)\n可以被其他原生函数及原生线程使用")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("jclass globalClazz;//设为全局变量 其他方法也可以调用\n...原生方法中\n//将局部引用初始化为全局引用\nglobalClazz = (*env)->NewGlobalRef(env,localClazz);\n...\n//方法返回后\n//localClazz 被回收,globalClazz不被回收\n//可以通过(*env)->DeleteGlobalRef(env,globalClazz)去释放它\n")])])]),e("h3",{attrs:{id:"弱全局引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弱全局引用"}},[a._v("#")]),a._v(" 弱全局引用")]),a._v(" "),e("blockquote",[e("p",[a._v("弱引用，原生方法返回后不被回收，但是当内存不足时会被回收(与Java一样)")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("//用给定的局部引用创建全局引用\njclazz weakGlobalClazz =(*env)->NewWeakGlobalRef(env,localClazz)\n//用IsSameObject检测是否被回收(NULL)\nif(JNI_FALSE == (*env)->IsSameObject(env,weakGlobalClazz,NULL)){/*未被回收，扔可使用*/}\nelse{/*被回收*/}\n//删除弱全局引用\n(*env)->DeleteWeakGlobalRef(env,weakGlobalClazz);\n")])])]),e("hr"),a._v(" "),e("h2",{attrs:{id:"线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[a._v("#")]),a._v(" 线程")]),a._v(" "),e("blockquote",[e("p",[a._v("传递给每个原生方法的JNIEnv 接口指针只在方法调用相关线程有效,其他线程不能被缓存or使用")])]),a._v(" "),e("h3",{attrs:{id:"同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[a._v("#")]),a._v(" 同步")]),a._v(" "),e("h3",{attrs:{id:"原生线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生线程"}},[a._v("#")]),a._v(" 原生线程")]),a._v(" "),e("hr"),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("> 参考: http://yanbober.github.io/2015/02/16/android_studio_jni_2/ \n> Android C++高级编程\n")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);