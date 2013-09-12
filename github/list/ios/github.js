var githubList =  [
{
name:'系统基础库',
list: [

{name:'Category/Util',
list: [
    {name:'sstoolkit', desc:'一套Category类型的库,附带很多自定义控件 功能不错～'},
    {name:'cocoa-helpers', desc:'一些Cocoa的扩展 3年前的工程'},
    {name:'CoconutKit', desc:'一系列扩展和一些自定东西'},
    {name:'STUtils', desc:'一系列扩展包'},
    {name:'PSFoundation', desc:'一系列扩展 和功能增强'},
    {name:'ConciseKit', desc:'一系列宏定义 挺有意思'},
    {name:'DTFoundation', desc:'又一系列扩展。。。'},
    {name:'BBBootstrap', desc:'一些类似YYKit的扩展库'},
    {name:'NSObject-Utility-Categories', desc:'如题'},
    {name:'NSArray-Utilities', desc:'如题'},
    {name:'aqtoolkit', desc:'一些常用的东西'},
    {name:'DLIntrospection', desc:'一些NSObject的扩展'},
    {name:'ABContactHelper', desc:'如题'},
    {name:'NSDate-Extensions', desc:'如题日期'},
    {name:'ALActionBlocks', desc:'在UIControl上添加的Block事件'},
    {name:'jrswizzle', desc:'一个很棒的运行时扩展 方法替换等'},
    {name:'moriarty', desc:'一些还算有用的功能'},
    {name:'QSUtilities', desc:'一些基础库 (Instagram有用到)'},
    {name:'libextobjc', desc:'一堆oc的扩展'},
    {name:'PrettyTimestamp', desc:'友好时间的扩展'},
    {name:'ios-jail-break-detector', desc:'检测是否越狱 有上线'},
    {name:'crackify', desc:'检测App是否被破解'},
    {name:'NSBundle-OBCodeSigningInfo', desc:'检查当前签名\Sandbox状态 MacOSX'},
    {name:'UIView-AnimatedProperty', desc:'为UIView添加动画效果的property,有用到swizzle'},
    {name:'Block-KVO', desc:'Block风格的KVO~'},
    {name:'MTDates', desc:'一些Data的category'},
    {name:'CocoaSecurity', desc:'常见的哈希、加密解密算法'},
    {name:'sskeychain', desc:'访问keychain 支持iOS Mac'}
]
},

{name:'基础功能',
list:[
    {name:'mediaextract', desc:'纯C的一些常用媒体文件的解析读取'},
    {name:'objection', desc:'一个估计是java写多了的人搞的。。注解依赖注入之类的'},
    {name:'HTKit', desc:'一票乱七八糟的东西'},
    {name:'StringScore', desc:'模糊匹配字符串 查找某两个字符串的相似程度'},
    {name:'RegexKitLite', desc:'正则表达式库 (从SF mirror过来)'},
    {name:'FormatterKit', desc:'一套NSString的格式化工具'},
    {name:'TMCache', desc:'一个Cache'},
    {name:'EGOCache', desc:'和EGOImage里面的 Cache功能'},
    {name:'HJCache', desc:'一个缓存网络内容等的Cache'},
    {name:'RNCryptor', desc:'加密解密相关 貌似更上流,去看一下他博客'},
    {name:'ZipKit', desc:'一个ZipKit 从bitbucket Mirror过来'},
    {name:'ZipKit-ARC', desc:'如同ZipKit 改为ARC了'},
    {name:'MTMigration', desc:'版本升时执行一次'},
    {name:'MTControl', desc:'jQuery风格touch事件绑定'},
    {name:'storage', desc:'快速、县城安全的I/O存储操作'}
]
},

{name:'框架/封装',
list:[
    {name:'three20', desc:'facebook的开源库 很多东西'},
    {name:'nimbus', desc:'three20替代品 增强型库,添加了很多默认没有的功能，很杂很多'},
    {name:'BeeFramework', desc:'一款MVC框架 附带调试工具'},
    {name:'WebViewJavascriptBridge', desc:'WebView和Cocoa之间的事件传递'},
    {name:'ReactiveCocoa', desc:'一套响应式编程的框架 支持Mac'},
    {name:'Kiwi', desc:'一个Behavior驱动编程框架？'},
    {name:'Mantle', desc:'一个简单的Model功能, 替代CoreData 可以生成Model对象~'},
    {name:'MagicalRecord', desc:'对CoreData和iCloud的包装'},
    {name:'fmdb', desc:'对SQLite的封装'},
    {name:'KZPropertyMapper', desc:'一个Model的封装,类JSON'},
    {name:'BlockInjection', desc:'为某个方法注入一个Block 类似AOP'},
    {name:'NSObject-ObjectMap', desc:'JSON和XML包装到Object'}
]
},

{name:'功能/封装',
list:[
    {name:'MKStoreKit', desc:'iAP用的库'},
    {name:'CargoBay', desc:'一个包装iAP StoreKit的库'},
    {name:'QuincyKit', desc:'处理crach信息的库 只有上架应用才能用 支持Mac'},
    {name:'OpenUDID', desc:'系统UDID替代方案'},
    {name:'UIDevice-with-UniqueIdentifier-for-iOS-5', desc:'一个UUID解决方案'},
    {name:'uidevice-extension', desc:'一系列UIDevice的扩展 有PrivateAPI 最新的工程在cookbook-code里'},
    {name:'InAppSettingsKit', desc:'包装了设置、URLScheme、Mail、Icon等东西'},
    {name:'DTWebArchive', desc:'允许访问剪贴板中的WebArchive格式富文本'},
    {name:'routable-ios', desc:'inApp的URL定义 在App内打开自定义URL (解耦)'},
    {name:'Emoji', desc:'访问Emoji图片的功能'},
    {name:'PDKeychainBindingsController', desc:'以类似UserDefault的方式访问Keychain'},
    {name:'CoreTextWrapper', desc:'一个CoreText库的包装'},
    {name:'Slash', desc:'对AttributeString的封装'}
]
},

]
},

{name:'网络',
list:
[

{name:'基础',
list:[
    {name:'AFNetworking', desc:'很棒的HTTP库 用的人最多'},
    {name:'AFIncrementalStore', desc:'把AFNetworking持久化'},
    {name:'asi-http-request', desc:'一个HTTP库'},
    {name:'MKNetworkKit', desc:'一个HTTP库 支持Mac'},
    {name:'STHTTPRequest', desc:'一个简洁好用的http库'},
    {name:'RestKit', desc:'一个HTTP库 用来与RESTful的服务器交互'},
    {name:'CocoaAsyncSocket', desc:'TCP/UDP包装库 支持Mac 很棒'},
    {name:'Reachability', desc:'和苹果的很像'},
    {name:'SDReachability', desc:'和苹果的很像，更有好？'},
    {name:'socket.IO-objc', desc:'支持HTTP 长轮寻 socket.io'},
    {name:'DTBonjour', desc:'Bonjour和Wifi'},
    {name:'XMPPFramework', desc:'XMPP客户端的库～ 支持Mac'},
    {name:'CocoaHTTPServer', desc:'一个轻量的HTTP Server 支持Mac'},
    {name:'SocketRocket', desc:'WebSocket客户端～'}
]
},

{name:'JSON',
list:[
    {name:'JSONKit', desc:'两个文件,性能在第三方中最好'},
    {name:'json-framework', desc:'SBJson 用得广泛的JSON'},
    {name:'TouchJSON', desc:'又一个JSON库'},
    {name:'yajl-objc', desc:'一个JSON库 可以支持流解析 支持Mac'},
    {name:'JSONModel', desc:'一个构建JSON Model的工具和库'}
]
},

{name:'XML/Html',
list:[
    {name:'MWFeedParser', desc:'Feed/Atom解析'},
    {name:'RSSKit', desc:'RSS Atom解析'},
    {name:'ElementParser', desc:'提供Html和XML的解析'},
    {name:'hpple', desc:'提供Html/XML解析'},
    {name:'RaptureXML', desc:'一个简单的XML解析器 包装了libxml'},
    {name:'KissXML', desc:'解析XML的库 包装了libxml'},
    {name:'TBXML', desc:'快速解析xml的库'},
    {name:'xmldocument', desc:'又一个解析XML的库'},
    {name:'XMLDictionary', desc:'蛮好用的一个XML转NSDictionary的类~'},
    {name:'XML-to-NSDictionary', desc:'XML转NSDictionary'},
    {name:'MMMarkdown', desc:'一个渲染Markdown到HTML的小引擎'},
    {name:'Ashton', desc:'在NSAttrbuteString和Html之间转换'},
    {name:'XMLParser', desc:'XML解析成json～'}
    ]
},
{name:'功能性',
list:[
    {name:'EGOImageLoading', desc:'下载使用网络图片的库'},
    {name:'SDWebImage', desc:'在UIImage加的分类,用于获取网络图片'},
    {name:'GroundControl', desc:'一个通过远程plist改变配置的库'},
    {name:'appirater', desc:'提醒用户稍后到AppStore给你评分的功能 用的人挺多'},
    {name:'iRate', desc:'类似appirater 提醒用户稍后到AppStore评分 支持Mac'},
    {name:'ShareKit', desc:'分享到国外的一些社交网站 的功能 用的的人挺多'},
    {name:'Harpy', desc:'新版本更新提醒'},
    {name:'ShareKit2', desc:'同ShareKit 有些新东西'},
    {name:'DataKit', desc:'以类似CoreData的Model 来获取网络资源'}
    ]
},
{name:'SDK',
list:[
    {name:'facebook-ios-sdk', desc:'Facebook的API 挺多东西'},
    {name:'MGTwitterEngine', desc:'一套Twtter库'},
    {name:'Twitter-OAuth-iPhone', desc:'Twitter的OAuth功能'},
    {name:'Foursquare-API-v2', desc:'Foursquare的库'}
    ]
},

]
},


{name:'音频',
list:[
    {name:'novocaine', desc:'一个声音库 录音放音 页面上有CoreAudio的教程链接'},
    {name:'TheAmazingAudioEngine', desc:'一个声音库 包装了CoreAudio'},
    {name:'AudioStreamer', desc:'音频流播放库 支持Mac'},
    {name:'SimpleAudioEngine', desc:'一个简单的播放声音的库'},
    {name:'DOUAudioStreamer', desc:'豆瓣的音频流播放'},
    {name:'audiograph', desc:'一个AU的教程 & 示例工程~'},
    {name:'NVDSP', desc:'一个iOS上的DSP处理'},
    {name:'Blip-Synth', desc:'一个Blip声音合成器'},
    {name:'PGMidi', desc:'一个Midi库'},
    {name:'sc_listener', desc:'检测系统声音等级的库'},
    {name:'ObjectAL-for-iPhone', desc:'一个OpenAL的包装库 比较好用'},
    {name:'SoundBankPlayer', desc:'一个仿SoundFout的库 但更简单'},
    {name:'Finch', desc:'对底层的OpenAL包装'},
    {name:'SoundManager', desc:'很简单的Sound播放管理'},
    {name:'libpd', desc:'一个用PD来创造音乐的库？ 纯C'},
    {name:'pd-for-ios', desc:'同libpd'},
    {name:'RCTMidiLib', desc:'一个Pad连接Midi设备通信的包装'},
    {name:'kxmovie', desc:'一个ffmpeg的播放器 ～～～ 需要先构建ffmpeg'},
    {name:'modizer', desc:'!!!超强大的App 可以读取和演奏各种mod音乐 合成 解压 下载 自带庞大音乐库'},
    {name:'octave', desc:'一个免费的音效库 包括48个UI音效'},
    {name:'RBDMuteSwitch', desc:'在iOS5上检测是否静音'},
    {name:'sfArkLib', desc:'转换sfArk和sf2的库 很简单'},
    {name:'sfArkXTm', desc:'简单解压sfArk的一个cpp'},
    {name:'unsfark', desc:'和上面sfArkXTm一样，是老一点的纯C版本'},
    {name:'MuseScore', desc:'一个跨平台的音乐软件～ not iOS'},
    {name:'OpenSFZ', desc:'一个SF2的处理库(Github上有详细说明) An Open SFZ player & SF2 based on SFZero'},
    {name:'alsaplayer', desc:'一个Linux下PCM库 有sf2 midi等处理过程'}
    ]
},


{name:'游戏',
list:[
    {name:'cocos2d-iphone', desc:'2D游戏引擎'},
    {name:'cocos2d-iphone-extensions', desc:'cocos2d的扩展'},
    {name:'smooth-drawing', desc:'cocos2d中画出平滑的曲线'},
    {name:'tiny-wings', desc:'仿TinyWings的Demo 用Cocos2D'},
    {name:'Tiny-Wings-Remake-on-Android', desc:'RT'}
    ]
},



{name:'图像',
list:[

{name:'GPU OpenGL',
list:[
    {name:'GPUImage', desc:'很棒的GPU图像处理'},
    {name:'XBImageFilters', desc:'一个GPU实时处理的库 类似GPUImage'},
    {name:'CeedGL', desc:'一个OpenGL的包装 用起来更方便'},
    {name:'rend-ios', desc:'一个OpenGL的轻量包装 接近UIKit'},
    {name:'GLView', desc:'在UIView的包装 方便使用OpenGL'},
    {name:'sift-gpu-iphone', desc:'一个包装GL用的,不知道干毛的'},
    {name:'ShaderManager', desc:'如题 一个Manager 管理创建Shader'},
    {name:'GLImageProcessing', desc:'演示如何用GPU处理图片'},
    {name:'FRD3DBarChart', desc:'用OpenGL绘制的3D柱形图'},
    {name:'EarthView', desc:'显示3D地形图 用OpenGL'},
    {name:'CoreAR', desc:'一个挺有意思的AR'},
    {name:'VRToolKit', desc:'一个虚拟现实的库'}
    ]
},
{name:'图像处理',
list:[
    {name:'NYXImagesKit', desc:'一套图像处理的库 加在UIImage上'},
    {name:'ios-image-filters', desc:'UIImage扩展 类似PS的功能 用CoreImage'},
    {name:'vImageCategory', desc:'UIImage扩展 简单的一些处理'},
    {name:'MGImageUtilities', desc:'几个简单的图片处理 UIImage'},
    {name:'UIImageAdjust', desc:'一些UIImage的扩展 如亮度 模糊等'},
    {name:'CKImageAdditions', desc:'一些UIImage的不错功能～'},
    {name:'LBBlurredImage', desc:'UIImage扩展 可以模糊 不知道性能如何'},
    {name:'FilterKit', desc:'为拍照添加滤镜 基于GPUImage'},
    {name:'TCam', desc:'用CIFIlter实现的类似Instagram的类'},
    {name:'PKCoreTechniques', desc:'CA和CG的特性演示'},
    {name:'UIImage-Categories', desc:'UIImage的一些扩展'},
    {name:'uiimage-dsp', desc:'UIImage模糊的一些方法'},
    {name:'UIImage-Sprite-Additions', desc:'UIImage取Sprite~'},
    {name:'iOS-Scratch-n-See', desc:'类似结冰玻璃用手画开的效果~'},
    {name:'OBGradientView', desc:'一个渐变色的CALayer 比系统的好用些'},
    {name:'ANImageBitmapRep', desc:'一些Bitmap处理的方法'},
    {name:'KGNoise', desc:'产生带噪音的Image 支持Mac'},
    {name:'KGNoiseColorTester', desc:'上面KGNoise的演示'},
    {name:'SQRiskCursor', desc:'一个用CA和UIControl自定义控件的例子'},
    {name:'AmazeKit', desc:'据说是为PNG加速 或自己画 主要为控件提升性能的'},
    {name:'UIImage-PDF', desc:'如题 UIImage读取PDF'},
    {name:'JMNoise', desc:'给UIView添加Noise噪音的'},
    {name:'SWSnapshotStackView', desc:'图片加上Stack外框'},
    {name:'RMShapedImageView', desc:'一个UIImageView的子类 能忽略透明地方的点击'},
    {name:'MOOMaskedIconView', desc:'一个通过Mask显示Icon的库 只要一个Mask 可以生成很多风格的Icon 类似Tabbar'},
    {name:'FTAssetRenderer', desc:'运行时的图像Mask生成?'},
    {name:'wolfpack', desc:'图像处理库CI CG'},
    {name:'DSGraphicsKit', desc:'支持图片常见处理 视图控制3D等'},
    {name:'uiimage-from-animated-gif', desc:'显示gif'},
    {name:'cam', desc:'一个AVFoundation的封装、照相等功能'}
    ]
},
{name:'颜色',
list:[
    {name:'uicolor-utilities', desc:'UIColor扩展和色板'},
    {name:'color', desc:'一系列UIColor扩展'},
    {name:'ColorUtils', desc:'一个UIColor扩展'},
    {name:'ColorConverter', desc:'RGB和HSL转换'},
    {name:'InfColorPicker', desc:'一个色彩选择器'},
    {name:'RSColorPicker', desc:'一个不错的色彩选择器 有放大镜'},
    {name:'colorpicker', desc:'一个很强大的ColorPicker 包装了挺多东西'},
    {name:'ColorPicker_Thallius', desc:'功能很棒的一个取色'},
    {name:'ILColorPicker', desc:'一个还算标准的ColorPicker'},
    {name:'NPColorPicker', desc:'一个HSV三角取色器'},
    {name:'KZColorPicker', desc:'又一个HSV圆盘取色器'},
    {name:'Color-Picker-for-iOS', desc:'一个简单的单色Picker 有一个滑块'},
    {name:'LEColorPicker', desc:'一个ColorPicker可以取到图片的主色调等'},
    {name:'UIColor-converter', desc:'一些UIColor的工具～～'},
    {name:'SUColor', desc:'提供2K多的日本色'},
    {name:'Colours-for-iOS', desc:'提供不少常用色 和几个方法'},
    {name:'ColorArt', desc:'类似iTunes的 取一幅图画的主要背景颜色等 (这是个Mac功能 需要尝试iOS)'}
    ]
},

{name:'绘图库',
list:[
    {name:'iOSPlot', desc:'画饼图/折线图的库 用CA'},
    {name:'Core-Animation-Pie-Chart', desc:'用CA画饼图 示例'},
    {name:'ADGraphView', desc:'一个CG绘画库 股票曲线演示'},
    {name:'SVGKit', desc:'一个表现SVG图片的库'},
    {name:'Smooth-Line-View', desc:'用QuartZ画出平滑的曲线'},
    {name:'Smooth-Line-View_yusenhan', desc:'用上面的库搭建的比较完整的画板功能 有取色器等'},
    {name:'SignatureDemo', desc:'一个QuartZ 触摸画平滑曲线的Demo～～～'},
    {name:'DynamicGraphView', desc:'动态折线图'},
    {name:'XYPieChart', desc:'饼图~有动画'},
    {name:'Animated-Paths', desc:'动画画出文字和图形的轮廓~'}
    ]
},

]
},

{name:'动画/效果',
list:[

{name:'CA',
list:[
    {name:'CA360', desc:'一套完整的CA动画Demo'},
    {name:'Core-Animation-Fun-House', desc:'一套CA动画展示Demo'},
    {name:'Core-Animation-Demos', desc:'一套CA动画Demo'},
    {name:'EnterTheMatrix', desc:'CA动画演示Demo'},
    {name:'ftutils', desc:'一套CA的Util库 有一些常用动画'},
    {name:'Dazzle', desc:'用CA实现的各种有趣的粒子效果'}
    ]
},
{name:'动画曲线',
list:[
    {name:'NSBKeyframeAnimation', desc:'那些jQuery带的动画速率曲线'},
    {name:'CAAnimation-EasingEquations', desc:'一些CA没有的动画曲线'},
    {name:'UIView-EasingFunctions', desc:'UIView的动画曲线~~'},
    {name:'PhysicsAnimation', desc:'物理动画,用Chipmunk实现的重力效果等'},
    {name:'DPMeterView', desc:'有重力感应的2D图形动画(例如瓶子的水) 貌似挺有意思～～'},
    {name:'Parallax', desc:'iOS7的景深背景动画效果 一般..'},
    {name:'MTAnimation', desc:'25种动画曲线~~~'}
    ]
},
{name:'常见动画',
list:[
    {name:'BCGenieEffect', desc:'和Mac里最小化的效果～～'},
    {name:'iCarousel', desc:'一套类似CoverFlow的动画,非常棒,可选多样式! 可用于Mac'},
    {name:'OpenFlow', desc:'类似CoverFlow的效果 挺老的工程 支持Mac'},
    {name:'PaperFold-for-iOS', desc:'一套类似报纸展开的仿3D效果 用CA实现'},
    {name:'MPFoldTransition', desc:'那个能左右上下Cube翻页的效果 挺棒'},
    {name:'iOS-Flip-Transform', desc:'一个Flip翻页效果 支持上下左右翻页 会变暗'},
    {name:'AFKPageFlipper', desc:'一个Flip翻页效果 可能性能不够好 也不会变暗'},
    {name:'DoorwayTransition', desc:'一个OpenDoor的动画'},
    {name:'Flipboard-3D-Transform-Effect-Example', desc:'如题Flip效果 没测试'},
    {name:'PaperFoldMenuController', desc:'一个Map折纸动画效果 一般'},
    {name:'XYOrigami', desc:'Map折纸动画~'},
    {name:'PaperStack', desc:'用OpenGL实现的类似iBook的效果 但是一般'},
    {name:'GCRetractableSectionController', desc:'让TableView能按Group展开合起'},
    {name:'HMGLTransitions', desc:'一个OpenGL的视图切换 跑不起来?'},
    {name:'EPGLTransitionView', desc:'一个OpenGL的视图 包括iBook效果 折纸翻页效果 散落效果'},
    {name:'leaves', desc:'一套有些类似iBook的效果但只有横向翻页 被用在看书的地方 很久没更新了'},
    {name:'GC3DFlipTransitionStyleSegue', desc:'用GL实现的iBook'},
    {name:'KNSemiModalViewController', desc:'一个推出ModalView的动画 后面的会缩小上移'},
    {name:'letterpressexplosion', desc:'UIView的撕碎爆炸效果 (CA实现)'},
    {name:'FancySegue', desc:'几个GL实现的动画 虽然不怎么好'},
    {name:'CoreImageTransition', desc:'用CI实现的一些动画过渡 过雾～'},
    {name:'LTransitionImageView', desc:'一个Image的过渡效果'},
    {name:'STScratchView', desc:'刮奖的效果'}
    ]
},

]
},

{name:'控件',
list:[
{name:'HUD',
list:[
    {name:'MBProgressHUD', desc:'一个HUD 用得很广泛 无阴影 全屏模态'},
    {name:'MBProgressHUD-fock-matej', desc:'和MBHUD一样 但有更新 添加了BLock iOS6'},
    {name:'ATMHud', desc:'很不错的HUD 有阴影和动画~'},
    {name:'SVProgressHUD', desc:'一个HUD 类似MBProgressHUD 有一些进度等'},
    {name:'ETActivityIndicatorView', desc:'Windows7风格风火轮'}
    ]
},
{name:'Slider',
list:[
    {name:'JMSlider', desc:'一个很小清新的Slider 用CA画的'},
    {name:'iOS-Custom-Controls', desc:'按住可以出Pop的UISlider'},
    {name:'MTZTiltReflectionSlider', desc:'一个模仿iOS6 Music的Slider'},
    {name:'ASRangeSlider', desc:'一个两段式的Slider'},
    {name:'DCFineTuneSlider', desc:'可以拖动外部 和显示左右箭头的Slider'},
    {name:'ARAnnotatedSlider', desc:'KVO教学 一个在Slider上面显示小Poper的～'},
    {name:'LARSBar', desc:'显示声音dB的Slider'},
    {name:'OBSlider', desc:'模拟iPhone音乐进度的表现'},
    {name:'TLTiltSlider', desc:'仿iOS6 音量Slider,有金属光泽动画'}
    ]
},

{name:'Progress',
list:[
    {name:'KOAProgressBar', desc:'自定义ProgressBar'},
    {name:'DDProgressView', desc:'平面风格的Progress进度条'},
    {name:'WNProgressView', desc:'一些有趣风格的ProgressView'},
    {name:'YLProgressBar', desc:'一些不错样式的ProgessBar'}
    ]
},
{name:'侧滑',
list:[
    {name:'ViewDeck', desc:'Facebook样的侧滑控件'},
    {name:'ECSlidingViewController', desc:'一个很简单的侧滑控件'},
    {name:'JASidePanels', desc:'一套不错样式的侧滑控件'},
    {name:'PSStackedView', desc:'一套侧滑且带Stack的控件,类似Twitter iPad'},
    {name:'PKRevealController', desc:'一个侧滑控件'},
    {name:'JTRevealSidebarDemo', desc:'一个类似FB侧滑的Demo'},
    {name:'PPRevealSideViewController', desc:'又一个类似FB的侧滑控件'},
    {name:'CLCascade', desc:'类似Twitter iPad版的侧滑控件'},
    {name:'SlideViewController', desc:'侧滑菜单 类似FB的界面'},
    {name:'MMDrawerController', desc:'一个侧滑控件,没研究过,但Follow挺多'}
    ]
},

{name:'Popover',
list:[
    {name:'CMPopTipView', desc:'把PopView带入的iPhone'},
    {name:'FPPopover', desc:'一个PopOver 支持iPhone'},
    {name:'WEPopover', desc:'一个仿Popover API库 支持iPhone'},
    {name:'UAModalPanel', desc:'一个类似PopView控件 可以比较多的自定义 Demo较乱'},
    {name:'ColorPopover', desc:'一个用WEPopover写的单色选择'},
    {name:'MultiRowCalloutAnnotationView', desc:'在Map里面弹出带表格的Pop'},
    {name:'QBPopupMenu', desc:'类似iOS文字上的Pop 可以自定义~'},
    {name:'kxmenu', desc:'一个PopView,动作还可以'},
    {name:'RNGridMenu', desc:'一个Pop菜单，有背景模糊，效果不错～'},
    {name:'GIKPopoverBackgroundView', desc:'为PopOver提供无缝背景 很棒'},
    {name:'AwesomeMenu', desc:'Path的扇形弹出按钮效果(CA)'},
    {name:'QuadCurveMenu', desc:'上面AwesomeMenu的fork 类似Path的菜单'},
    {name:'MGTileMenu', desc:'弹出按钮菜单 在四周成方形 效果不错'},
    {name:'ADPopupView', desc:'在UIVIew上弹出自己画的界面 挺丑 但可以看看实现'},
    {name:'KLExpandingSelect', desc:'四叶草风格弹出菜单'},
    {name:'StackMenu', desc:'Mac的Stack弹出菜单'}
    ]
},

{name:'下拉刷新',
list:[
    {name:'MSPullToRefreshController', desc:'一个不错的上下拉刷新的控件 里面是彩虹'},
    {name:'EGOTableViewPullRefresh', desc:'下拉刷新,很早的一个控件了2年没更新了'},
    {name:'PullToRefresh', desc:'下拉刷新'},
    {name:'SVPullToRefresh', desc:'下拉刷新 扩展了UIScrollView 很方便简单'},
    {name:'HybridRefreshGestureRecognizer', desc:'一个离类似TweetBot的下拉刷新样式'}
    ]
},

{name:'状态栏',
list:[
    {name:'MTStatusBarOverlay', desc:'状态栏的控件,但很久没更新了'}
    ]
},

{name:'GridView',
list:[
    {name:'AQGridView', desc:'类似TableView但有横向分类,就像Android Launcher'},
    {name:'GMGridView', desc:'又一个GridView 很不错,自带横纵排序编辑等功能'},
    {name:'KKGridView', desc:'又一个GridView 已经Deperacted 直接用系统的就好'},
    {name:'A3GridTableView', desc:'又一个GridView 貌似支持类似图标样的上栏'},
    {name:'LIExposeController', desc:'一个类似GridView的东西'}
    ]
},

{name:'Alert',
list:[
    {name:'BlockAlertsAnd-ActionSheets', desc:'一个Block支持的Alert控件 支持自定义 不错~'},
    {name:'MJPopupViewController', desc:'用不同左右动画弹出AlertView'},
    {name:'WCAlertView', desc:'一些不错的自定义AlertView'},
    {name:'GRAlertView', desc:'用CA画的带颜色的AlertView'},
    {name:'SBTableAlert', desc:'一个AlertView 可以带表格 可以用苹果风格'},
    {name:'URBAlertView', desc:'自定义AlertView 还有各种动画'},
    {name:'SIAlertView', desc:'一个样子不错的自定义AlertView'},
    {name:'MBMenuController', desc:'一个自定义AlertSheetVC'},
    {name:'JLActionSheet', desc:'另一个自定义AlertSheet'},
    {name:'ASDepthModal', desc:'实现简单的3维景深的模态视图 提供背景模糊'}
    ]
},

{name:'Segment',
list:[
    {name:'SVSegmentedControl', desc:'一个分段选择控件 类似Mac10.7测试版中的UI 很棒~'},
    {name:'URBSegmentedControl', desc:'一个灵活的分段控件 可以上下'},
    {name:'MCSegmentedControl', desc:'一个系统分段的子类 可以自定义颜色'},
    {name:'AKSegmentedControl', desc:'完全自定义的分段控件 风格不错'},
    {name:'HMSegmentedControl', desc:'Chrome风格的Tabbar分段'}
    ]
},

{name:'Switch',
list:[
    {name:'DCRoundSwitch', desc:'仿UISwicher 可以自定义 很棒'},
    {name:'TTSwitch', desc:'一个可以完全自定义的UISwich～～'},
    {name:'KLSwitch', desc:'iOS7风格的Switch 高仿'},
    {name:'MBSwitch', desc:'iOS7风格的Switch 效果多'},
    {name:'SevenSwitch', desc:'iOS风格Switch 效果很多～'}
    ]
},

{name:'Button',
list:[
    {name:'CoolButtons', desc:'用CA画的带Glow的button 仿照系统'},
    {name:'MAConfirmButton', desc:'一个类似AppStore下载的按钮 可以动画颜色大小等'},
    {name:'FTWButton', desc:'一个UIControl实例的Button 可以看到如何自定义控件 有不错的动画效果'},
    {name:'gradientbuttons', desc:'一个带有不同风格的Button~ 用CA绘制'},
    {name:'DCActionButtonsController', desc:'一个PopOver的里面带各种画出的按钮'},
    {name:'BPBarButtonItem', desc:'一个BarItem的不错的on the fly 生成'},
    {name:'BButton', desc:'一种自定义Button 样式类似Twitter的Bootstrap 用CA画的'},
    {name:'OBShapedButton', desc:'用CA绘制的特殊形状button,可以检测path touch'}
    ]
},

{name:'Scroll/Table',
list:[
    {name:'LRSlidingTableViewCell', desc:'一个简单的左右滑动Cell 类似Twitter'},
    {name:'TISwipeableTableView', desc:'UITable的左右滑动 类似Twitter'},
    {name:'TDBadgedCell', desc:'在TableCell右侧添加badge 有不同风格'},
    {name:'UITableViewZoomController', desc:'类似Google+的 滑动Table缩放显示内部图片'},
    {name:'UITableViewTricks', desc:'TableView的扇形样式'},
    {name:'iPhoneMK', desc:'几个简单的自己实现的View和Cell,提供某些常见功能'},
    {name:'EasyTableView', desc:'一个支持左右的TableView 不错～'},
    {name:'ZKRevealingTableViewCell', desc:'一个简单的可以左右滑动的TableCell'},
    {name:'ADLivelyTableView', desc:'非常棒的TableCell显示动画～～～'},
    {name:'MHLazyTableImages', desc:'一个简单的Table加载网络图片 从Apple的例子中改的'},
    {name:'MHPagingScrollView', desc:'一个可以Page的ScrollView 但可以看到左右的预览 类似WP7'},
    {name:'KLScrollSelect', desc:'一个竖屏滚动的选择瀑布流'},
    {name:'RNRippleTableView', desc:'Cell梳子抖动'}
    ]
},

{name:'Notification',
list:[
    {name:'EKNotifView', desc:'很简单的下方Notif实现'},
    {name:'MKInfoPanelDemo', desc:'一个从上方滑下的Notif控件 类似TwieetBot'},
    {name:'TSMessages', desc:'在导航栏显示一个下拉Notif 效果不错'},
    {name:'YRDropdownView', desc:'类似Tweetbot警告的下伸控件'},
    {name:'NoticeView', desc:'类似Tweetbot的下伸控件'},
    {name:'AJNotificationView', desc:'效果很不错的上部Notif提示'}
    ]
},

{name:'Label/Text',
list:[
    {name:'MarqueeLabel', desc:'UILabel跑马灯效果'},
    {name:'CoreTextHyperlinkView', desc:'用CoreText画的 可以带Link的Text'},
    {name:'MTAnimatedLabel', desc:'类似滑动解锁的闪动Label'},
    {name:'TextGlowDemo', desc:'一个给Label发出Glow光亮的Demo'},
    {name:'FXLabel', desc:'很多不错的Label特效'},
    {name:'AUIAnimatedText', desc:'一个UILabel子类 可以简单动画 颜色大小字体'},
    {name:'RTLabel', desc:'简单的富文本Label 可以用Html样式'},
    {name:'TTTAttributedLabel', desc:'一个Label控件 支持富文本属性'},
    {name:'DTCoreText', desc:'用CoreText显示HTML follow很多～'},
    {name:'OHAttributedLabel', desc:'支持Attribute的UILabel控件'},
    {name:'ARLabel', desc:'自动字体大小'},
    {name:'LEffectLabel', desc:'渐变动画颜色的Label,类似滑动解锁'},
    {name:'BBCyclingLabel', desc:'在Label发生改变时,有动画效果'}
    ]
},
{name:'界面切换/导航',
list:[
    {name:'APExtendedPageController', desc:'类似Chrome左右滑动切换视图的控件'},
    {name:'MBSpacialViewController', desc:'2D上下左右导航的奇怪视图'},
    {name:'MHTabBarController', desc:'一个类似Android的上方Tabbar'},
    {name:'FSVerticalTabBarController', desc:'在左侧的Tabbar'},
    {name:'AKTabBarController', desc:'自定义Tabbar 样式类似AppStore'},
    {name:'MGSplitViewController', desc:'类似系统的UISplitVC 但有更多功能'},
    {name:'PSTCollectionView', desc:'类似系统的UIColloectionView 为了支持iOS4.3'},
    {name:'JMTabView', desc:'一个TabView 用CA画的,类似 Mac系统的单选控件'},
    {name:'MWFSlideNavigationViewController', desc:'一个能左右上下滑动的简单导航栏'},
    {name:'UIScrollSlidingPages', desc:'一个和Chrome类似的左右滑动Pager'},
    {name:'FlipBoardNavigationController', desc:'类似网易客户端/Flipboard手机 左右滑动的Nav'},
    {name:'BCTabBarController', desc:'Twitter类似的Tabbar 2年前的工程'},
    {name:'CKSideBarController', desc:'类似Twitter iPad的左侧Tabbar'},
    {name:'DVSlideViewController', desc:'类似Safari的滑动切换'},
    {name:'HGPageScrollView', desc:'类似Safari浏览的分页控件、'},
    {name:'HSImageSidebarView', desc:'一个类似Keynote的侧边栏'},
    {name:'RNSwipeViewController', desc:'滑动界面显示另一个界面 类似下拉状态栏查看天气'},
    {name:'RESideMenu', desc:'iOS7风格侧滑'}
    ]
},

{name:'知名效果Demo',
list:[
    {name:'KLNoteViewController', desc:'一个类似Evernote的Stack界面 绿色的'},
    {name:'REComposeViewController', desc:'一个类似系统Twitter分享界面~'},
    {name:'DETweetComposeViewController', desc:'一个iOS4实现的 类似iOS5的twitter分享'},
    {name:'JTGestureBasedTableViewDemo', desc:'一个类似Clear的Demo'},
    {name:'MCSwipeTableViewCell', desc:'类似Mailbox的控件 和Clear差不多'},
    {name:'PSCollectionView', desc:'类似瀑布流式的控件'},
    {name:'IIIThumbFlow', desc:'瀑布流控件'},
    {name:'WaterflowView', desc:'瀑布流的View 看样子Star挺多'},
    {name:'KNPathTableViewController', desc:'在Table右侧显示类似Path的时间 很简单~'},
    {name:'GSBookShelf', desc:'一个类似iBook书柜的实现'},
    {name:'M6ParallaxController', desc:'类似Path封面的效果'},
    {name:'ZGParallelView', desc:'类似Path的封面效果 貌似不错'},
    {name:'TimeScroller', desc:'类似Path右侧的时间小滑块'},
    {name:'chatheads', desc:'Facebook 一个一直最上方的头像 点击可以显示Table'},
    {name:'MBSliderView', desc:'滑动解锁'},
    {name:'DKLiveBlur', desc:'雅虎天气风格的动态模糊'},
    {name:'ios-realtimeblur', desc:'iOS7 模糊效果'}
    ]
},

{name:'其他',
list:[
    {name:'SMPageControl', desc:'一个仿UIPageControl的API类 可以自定义小点点～'},
    {name:'REActivityViewController', desc:'开的ActivityView实现'},
    {name:'DCControls', desc:'不错的扇形滑动控件 平面风格'},
    {name:'BSKeyboardControls', desc:'与键盘相关的控制 控制 上一项下一项'},
    {name:'OCMapView', desc:'一个MapKit标注聚合用的东西～'},
    {name:'NJKWebViewProgress', desc:'显示WebView加载进度'},
    {name:'REMenu', desc:'一个自NavBar的下拉菜单 不错～'},
    {name:'action-sheet-blocks', desc:'为ActionSSheet提供block方法'},
    {name:'ADClusterMapView', desc:'Map的地标Cluster 应该不错～'},
    {name:'TPKeyboardAvoiding', desc:'一个UIView的 在有键盘时上移'},
    {name:'calloutview', desc:'实现了私有的UICalloutView 类似地图中的弹出控件'},
    {name:'SVPulsingAnnotationView', desc:'一个自定义MapLocator 动画控件'},
    {name:'OWActivityViewController', desc:'一个类似系统的分享控件'},
    {name:'SYEmojiPopover', desc:'显示一个Emoji选择de PopOVer'},
    {name:'fingertips', desc:'在屏幕上显示触摸点 只支持iPad2和iPhone4s以上'},
    {name:'ASTouchVisualizer', desc:'为屏幕触摸添加指示 可用于屏幕录制'},
    {name:'openspringboard', desc:'仿SpringBoard的东西'},
    {name:'CQMFloatingController', desc:'一个浮动的VC 类似Pop没有箭头 可以用在横屏iPhone等'},
    {name:'WSCoachMarksView', desc:'为某个控件加上蒙板 类似Spotlight'},
    {name:'KLHorizontalSelect', desc:'横向扫动选择'},
    {name:'iOS-blur', desc:'iOS7的模糊效果 iOS7Only'},
    {name:'Masonry', desc:'AutoLayout框架'},
    {name:'KeepLayout', desc:'AutoLayout框架 貌似比较好用'},
    {name:'MLPAccessoryBadge', desc:'一些自定义badge~'},
    {name:'MSCellAccessory', desc:'Cell右侧的小箭头~'},
    {name:'ios-fontawesome', desc:'一套用字体实现的Icon'},
    {name:'WTGlyphFontSet', desc:'另一套用字体实现的Icon'}
    ]
},
{name:'高级功能',
list:[
    {name:'PAPasscode', desc:'类似系统的输入密码界面'},
    {name:'KKPasscodeLock', desc:'又一个类似系统输入密码界面'},
    {name:'PTShowcaseViewController', desc:'能显示音视频等一堆格式文件的控件'},
    {name:'Reader', desc:'一套显示PDF的库 支持大文件、加密文件 有iBook样式的界面 性能很好'},
    {name:'FastPdfKit', desc:'一套PDF库 性能据说很好 也有界面'},
    {name:'Kal', desc:'一套日历控件 高仿iOS默认'},
    {name:'objc-TimesSquare', desc:'一套日历控件 类似iOS默认 貌似清新一些'},
    {name:'ABCalendarPicker', desc:'高仿iOS默认日历的DatePicker~'},
    {name:'MWPhotoBrowser', desc:'一套图片浏览控件 高仿iOS默认 支持网络图片'},
    {name:'PTImageAlbumViewController', desc:'图片浏览控件 仿iOS默认'},
    {name:'AGImagePickerController', desc:'选取图片 支持多选'},
    {name:'ELCImagePickerController', desc:'一个仿系统的ImagePicker 但支持多选'},
    {name:'PhotoViewer', desc:'一个图片浏览的控件 没玩过'},
    {name:'DLCImagePickerController', desc:'一个用GPUImage实现的 ImagePicker功能,支持拍照和特效'},
    {name:'route-me', desc:'一套自定义MapView 高仿系统 但支持不同的数据源'},
    {name:'GrowingTextView', desc:'一个高仿短信发送的输入框'},
    {name:'PHFComposeBarView', desc:'高仿短信发送输入框'},
    {name:'ODRefreshControl', desc:'一个高仿iOS6下拉刷新的控件'},
    {name:'ssmessagesviewcontroller', desc:'和系统类似的发短信界面 挺粗糙 当然现在系统已经提供了'},
    {name:'SVWebViewController', desc:'一个简易的浏览器功能控件'},
    {name:'TITokenField', desc:'一个高仿Mail和短信 选择联系人的控件'},
    {name:'DAAppsViewController', desc:'一个仿AppStore的列表界面 输入appId集合'},
    {name:'WUEmoticonsKeyboard', desc:'输入表情的自定义键盘'}
    ]
},
{name:'套装',
list:[
    {name:'UI7Kit', desc:'一套iOS7风格的控件,可以再iOS5、6上用'},
    {name:'FlatUIKit', desc:'一套扁平风格的UI Flat'},
    {name:'iOS-boilerplate', desc:'一些常见功能实现的例子:HUD Table滑动,打开URL用WebView等'},
    {name:'idev-recipes', desc:'iDevRecipes博客的代码,掩饰了如何自定义一些控件,代码很老了..'},
    {name:'PrettyKit', desc:'一套系统UI的子类 有着平滑渐变和阴影效果'},
    {name:'tapkulibrary', desc:'一系列自定义控件 包括不错的HUD,进度条等'},
    {name:'QuickDialog', desc:'一套自定义控件库,用来快速建造基于Table的界面'},
    {name:'nui', desc:'一套加在UIKit上的Category,允许用类CSS代码来控制样式, 用的人不少'},
    {name:'MGBox2', desc:'一套UIView的扩展和子类 有不错的类CSS的功能 有些好用的代码 (UIColor)'},
    {name:'MGBox', desc:'MGBox的旧版 应该去看v2'},
    {name:'AePubReader', desc:'一个阅读epub的'}
    ]
}
]
},





{name:'较完整的App',
list:[
    {name:'ioctocat', desc:'一个Github客户端'},
    {name:'cheddar-ios', desc:'一个日程管理的App 应该比较知名'},
    {name:'AppSales-Mobile', desc:'基于iTunes Connect来查看App销售状况'},
    {name:'canabalt-ios', desc:'一个跑步的小游戏～'},
    {name:'baker', desc:'一套HTML5构建的ebook库 貌似挺强大'},
    {name:'iPhoneTracker', desc:'一个挺老的App 2年前'},
    {name:'Off-the-Record-iOS', desc:'一个实时聊天的功能 支持一些XMPP协议'},
    {name:'kokuban', desc:'一个iPad小画板 3年前'},
    {name:'glpaint', desc:'从Appled的GLPaint改的'},
    {name:'OpenGLMilkyWay', desc:'银河～～ 很棒 有教材'},
    {name:'iphone-app', desc:'OSChina 开源中国'},
    {name:'BeeFancy', desc:'一个仿Fancy的客户端 基于BeeFranework'},
    {name:'ruby-china-for-ios', desc:'RubyChina官方客户端'},
    {name:'ruby-china-ios', desc:'和上面一样?'},
    {name:'wh-app-ios', desc:'白宫官方App'},
    {name:'CastleHassle', desc:'一个Cocos2D的物理小游戏 貌似内容挺丰富～'},
    {name:'DocSets-for-iOS', desc:'iOS显示DocSets 可以下载iOS官方Doc~'},
    {name:'newsyc', desc:'一个newsyc.me的客户端 (iPhone hacker News)'},
    {name:'News-YC---iPhone', desc:'hackerNews的客户端'},
    {name:'Upcoming', desc:'一个设计很棒的日程安排'},
    {name:'ThatInbox', desc:'Ink出的邮件客户端'},
    {name:'ThatCloud', desc:'Ink出的云端文件管理'},
    {name:'ThatPDF', desc:'Ink出的PDF编辑'},
    {name:'ThatPhoto', desc:'Ink出的图片编辑'}
    ]
},


{name:'开发调试工具',
list:[
    {name:'PonyDebugger', desc:'一套Debugger工具,可以在电脑浏览器上远程调试iOS程序～查看试图层次、网络等'},
    {name:'NSLogger', desc:'一套Log工具,可以在电脑上通过client实时查看NSLog,甚至是图片和二进制文件 支持Android'},
    {name:'KIF', desc:'一套用Private API做的调试库,可以以用户的方式测试(touch in xxx)'},
    {name:'UIKit-Artwork-Extractor', desc:'把UIKit的控件以图片形式Dump出来～'},
    {name:'gh-unit', desc:'一套iOS调试工具'},
    {name:'DCIntrospect', desc:'一套iOS调试工具,在iOS界面里显示信息'},
    {name:'CocoaLumberjack', desc:'一套类似Log4j的东西,可提供企业级的Log~~~~'},
    {name:'Frank', desc:'貌似是自动化测试工具？'},
    {name:'superdb', desc:'一个Debuger工具 用命令行调试。。'},
    {name:'iOS-Hierarchy-Viewer', desc:'一个调试iOS界面的工具 通过浏览器访问~~ 值得瞅瞅～～'},
    {name:'Nocilla', desc:'一个模拟HTTP响应的调试库'},
    {name:'dyci-main', desc:'一个可以在调试时动态添加代码的工具 需要改动Xcode'},
    {name:'GestureLab', desc:'调试和把玩GestureRecognizor的'},
    {name:'cedar', desc:'BDD风格单元测试'}
    ]
},



{name:'旧代码 & 奇怪的东西',
list:[
    {name:'HockeyKit', desc:'一套iOS的 Ad-Hoc升级框架.包含PHP服务端'},
    {name:'Briefs', desc:'一套类似原型工具 3年没更新了'},
    {name:'OpenTLD', desc:'视频跟踪检测 貌似挺高深'},
    {name:'SimFinger', desc:'一些Fake系统图标的App 还有一些设备外框的图片、触摸点图片可以用'},
    {name:'scifihifi-iphone', desc:'已经弃用的旧代码 新工程去看github页面'},
    {name:'Ejecta', desc:'把js和Canvas WebGL等搬到iOS里～挺庞大'},
    {name:'iphonearkit', desc:'3年前的代码 貌似与地理位置有关'},
    {name:'TouchDB-iOS', desc:'一个嵌入式的CouchDB实现'},
    {name:'iOS-Runtime-Headers', desc:'从运行时Dump出来的公有/私有 Framework头'}
    ]
},


{name:'个人代码库大包包',
list:[
    {name:'iphone-3.0-cookbook-', desc:'随书代码'},
    {name:'iOS-5-Cookbook', desc:'随书代码～应该很棒'},
    {name:'iOS-6-Cookbook'},
    {name:'iOS-6-Advanced-Cookbook'},
    {name:'OmniGroup', desc:'一套很庞大的库 支持Mac和iOS'},
    {name:'MyProjects', desc:'一些http:/ /mysparks.info上面的代码'}
    ]
},




{name:'Mac Only',
list:[
    {name:'gitx', desc:'一个git的图形客户端'},
    {name:'gitx-fork', desc:'fork from gitx 添加了一些UI'},
    {name:'gitx_L', desc:'一个gitK Like的客户端'},
    {name:'Chameleon', desc:'把UIKit克隆到Mac里,可以看到一些可能的实现过程～'},
    {name:'Induction', desc:'一个Mac上的数据库客户端 支持Mysql Postgre Nosql Redis等'},
    {name:'twui', desc:'一个Mac的自定义控件库,有类似iOS的Table和Tab,用CoreAnimation'},
    {name:'CocoaPods', desc:'一个Ruby程序,用来管理Cocoa库依赖'},
    {name:'kod', desc:'Mac上的文本开发'},
    {name:'slate', desc:'Mac上查看当前窗口信息的菜单插件'},
    {name:'nu', desc:'一个包装,用nu语言来写东西？'},
    {name:'appledoc', desc:'用来生成Apple格式的文档和网页'},
    {name:'macgap', desc:'包装以可以用类似js的写法来调用函数, 例如 macgap.sound.play("./my/sound.mp3")'},
    {name:'Quicksilver', desc:'这个..Mac上知名的快速启动'},
    {name:'mogenerator', desc:'生成CoreData的Code'},
    {name:'nv', desc:'Note程序'},
    {name:'iTerm2', desc:'知名终端～'},
    {name:'Sparkle', desc:'一个软件升级用的Framework'},
    {name:'PostgresApp', desc:'PostgresSQL客户端'},
    {name:'terminal-notifier', desc:'通过终端发送Notification'},
    {name:'ShiftIt', desc:'管理桌面窗口 状态栏插件'},
    {name:'textmate', desc:'这个不用说了。。～～～'},
    {name:'textmate-missingdrawer', desc:'Textmate插件 一个侧边栏'},
    {name:'AckMate', desc:'Textmate插件 运行ack？'},
    {name:'clicktoflash', desc:'Webkit插件 屏蔽Flash'},
    {name:'MongoHub-Mac', desc:'MongoDB的客户端'},
    {name:'CocosBuilder', desc:'用于cocos2d的JS绑定 GUI设计'},
    {name:'Rebel', desc:'一些AppKit的扩展'},
    {name:'Textual', desc:'轻量的IRC客户端'},
    {name:'objectiveresource', desc:'据说是RoR的东西'},
    {name:'vico', desc:'一个开发用文本编辑器'},
    {name:'pomodoro', desc:'一个时间管理的App'},
    {name:'visor', desc:'Terminal的插件'},
    {name:'GoAgentX', desc:'这个不用说了....'},
    {name:'Pixen', desc:'像素画 的工具'},
    {name:'DataKit', desc:'不知道什么好想是与数据和网络连接的？'},
    {name:'Color-Picker-Pro', desc:'取色器 状态栏插件'},
    {name:'Picker', desc:'在状态栏的系统取色器'},
    {name:'SNRHUDKit', desc:'Mac版的HUD'},
    {name:'ConnectionKit', desc:'FTP和WebDAV'},
    {name:'OpenEmu', desc:'各种游戏机模拟器'},
    {name:'Hacky', desc:'一个完整的Hacker News客户端～～'},
    {name:'WWDCDownloader', desc:'下载WWDC用，Xcode5 only'},
    {name:'XVim', desc:'Xcode的插件 支持绑定VIM快捷键'},
    {name:'QuickCast', desc:'一个录屏分享的App'},
    {name:'zephyros', desc:'窗口管理 for hackers'},
    {name:'cocoapods-xcode-plugin', desc:'cocoapod 插件'},
    {name:'ColorSense-for-Xcode', desc:'Xcode的插件 支持动态调整UIColor'},
    {name:'KSImageNamed-Xcode', desc:'Xcode的插件 支持显示工程里的UIImage'},
    {name:'nib2objc', desc:'把xib和nib翻译成m 包括命令.GUI.Service'},
    {name:'iOS-Framework', desc:'编译iOS的Framework的通用模板'},
    {name:'Alcatraz', desc:'管理和发现插件～～'},
    {name:'UIEffectDesignerView', desc:'原生iOS/Mac粒子效果设计'}
    ]
}

];

