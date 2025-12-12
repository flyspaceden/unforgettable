import React, { useState, useEffect } from 'react';
import { 
  Fish, Thermometer, Activity, ShieldCheck, Smartphone, Droplets, 
  Menu, X, ChevronRight, MapPin, Award, Leaf, Utensils, ArrowRight, 
  TrendingUp, Wind, Microscope, Box, Truck, Database, Globe, 
  PlayCircle, Anchor, Users, Sun, CheckCircle, Navigation, Phone, Mail, Instagram,
  Cpu, Server, Radio, BarChart3, PieChart, Zap, BrainCircuit, Scan, Link as LinkIcon, Fingerprint,
  Heart, Smile, Sparkles, Tent, Library, Ticket, Camera
} from 'lucide-react';
import heroImage from './assets/images/清蒸鱼.jpg';
import logoImage from './assets/images/James Wong.png';
import emperorFishImage from './assets/images/帝皇鱼.png';
import princeFishImage from './assets/images/小鱼.jpg';
import processedFishImage from './assets/images/鱼丸.jpg';
import museumLocal from './assets/images/水产博物馆 & 科普研学基地.jpg';
import baseLocal from './assets/images/源自马来西亚忘不了-苏丹鱼.jpg';
import handbookImage from './assets/images/苏丹鱼手册.jpg';
import introImage from './assets/images/公司简介.jpg';
import storyImage from './assets/images/苏丹鱼介绍.jpg';
import traitsImage from './assets/images/苏丹鱼特性.jpg';
import convenienceImage from './assets/images/更便捷.jpg';
import qualityImage from './assets/images/严格品控层层把关.jpg';

// --- 图片资源配置 (Unsplash) ---
const IMAGES = {
  hero: heroImage,
  fish_dish: emperorFishImage,
  fried_fish: princeFishImage,
  base: baseLocal,
  tech_water: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800",
  james: logoImage,
  tourism: "https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?auto=format&fit=crop&q=80&w=1200",
  lab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
  tech_thermal: "https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?auto=format&fit=crop&q=80&w=1200",
  tech_eco: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800",
  tech_data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  tech_feed: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&q=80&w=800",
  collagen: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
  museum: museumLocal,
  eternal: "https://images.unsplash.com/photo-1540544660406-6a69dacb2804?auto=format&fit=crop&q=80&w=800",
  handbook: handbookImage,
  company_intro: introImage,
  fish_intro: storyImage,
  fish_traits: traitsImage,
  convenience: convenienceImage,
  quality: qualityImage,
};

// --- 多语言数据字典 ---
const CONTENT = {
  zh: {
    nav: {
      home: '首页',
      brand: '品牌故事',
      products: '臻选产品',
      tech: '核心科技',
      nutrition: '营养价值',
      tourism: '西江渔乐',
      contact: '联系我们',
      btn: '商务合作'
    },
    hero: {
      label: '国家级现代农业产业园核心项目',
      h1: '一口终身',
      h1_span: '忘不了',
      p: '源自马来西亚的“河鱼之王”苏丹鱼。鱼鳞软糯可食，肉质自带果香。依托南海热电厂恒温系统与数字化溯源，重塑淡水鱼品质巅峰。',
      btn1: '探索美味',
      btn2: '了解企业',
      stats: [
        { val: '1500亩', label: '生态养殖基地' },
        { val: '25℃', label: '全年恒温模拟' },
        { val: '0抗生素', label: '四安级标准' }
      ],
      float_card_1_title: '热电厂余热',
      float_card_1_desc: '25℃ 恒温黑科技',
      float_card_2_title: '全程可溯源',
      float_card_2_desc: '一鱼一码 极致安全',
      img_tag: '苏丹鱼 (Empurau)',
      img_desc: '淡水鱼中的“劳斯莱斯”，每一口都是时间的馈赠。'
    },
    usp: {
      title: '为什么它是“河鱼之王”？',
      subtitle: '不仅仅是美味，更是科技与自然的结晶',
      items: [
        { title: '鱼鳞可食·胶质满满', desc: '独创“烫鳞”吃法，口感软糯；亦可酥炸，脆如薯片。' },
        { title: '自带果香·无泥腥味', desc: '腹内无黑膜（腥味源头），肉质呈蒜瓣状，鲜甜甘香。' },
        { title: '脑黄金DHA·智力加油', desc: 'DHA含量高达100mg/100g，远超草鱼，适合孕妇儿童。' },
        { title: '四安标准·极致安全', desc: '0抗生素、0激素、0农残、0重金属。每一条鱼均可溯源。' }
      ]
    },
    products: {
      title: '从塘头到餐桌的极致鲜美',
      subtitle: '满足不同场景的苏丹鱼系列',
      emperor: {
        name: '忘不了·帝皇鱼',
        tag: '高端宴请首选',
        desc: '500g-750g大鱼。微晶冷冻锁鲜技术，保留细胞活性。适合清蒸，鱼鳞软糯，肉质紧实。',
        price: '高端礼盒装'
      },
      prince: {
        name: '忘不了·皇子鱼',
        tag: '下酒菜神器',
        desc: '25g左右小鱼。骨酥肉嫩，连骨头都能吃。适合避风塘炒、油泼、椒麻或香煎。',
        price: '家庭分享装'
      },
      processed: {
        name: '深加工衍生品',
        tag: '未来食品',
        desc: '鱼滑、鱼丸、鱼鳞胶原蛋白肽饮品。物尽其用，锁住每一分营养。',
        price: '研发中'
      },
      brands_title: '旗下品牌 IP',
      brands_list: ['渔欢仔', '浪樵鲜', '颂鲜令', '海韵潮']
    },
    tech: {
      title: '智慧渔业 4.0',
      subtitle: '科技赋能，重塑传统养殖',
      items: [
        { title: '热能交换恒温系统', desc: '利用南海热电厂余热蒸汽，通过热交换站，使鱼塘水温全年保持25℃，模拟马来西亚原生热带环境，激活鱼肉活性。', icon: 'thermal', img: IMAGES.tech_thermal },
        { title: '三池两坝净化', desc: '物理沉淀+生物拦截+有氧净化。尾水零排放，实现“好水养好鱼，好鱼净好水”的良性循环。', icon: 'water', img: IMAGES.tech_eco },
        { title: '数字化云端溯源', desc: '每一条鱼建立电子档案。水质PH值、溶氧量、饲料投喂记录全流程上云，扫码即可查看前世今生。', icon: 'cloud', img: IMAGES.tech_data },
        { title: '超有机生态饲料', desc: '联合华南师范大学王安利教授研发，大幅减少药物使用，确保肉质达到“四安”标准。', icon: 'feed', img: IMAGES.tech_feed }
      ],
      monitor: {
        title: '实时环境监测',
        temp: '25.0°C',
        temp_label: '水温恒定',
        ph: '7.5',
        ph_label: 'PH值',
        do: '7.2 mg/L',
        do_label: '溶解氧',
        status: '系统运行正常'
      },
      ai: {
        title: 'AI 智脑 & 全维溯源',
        subtitle: '数据驱动的信任机制',
        visual: 'AI 视觉识别',
        visual_desc: '高清摄像头配合计算机视觉，实时分析鱼群活跃度与摄食情况。',
        predict: '水质预测模型',
        predict_desc: '基于历史大数据训练，提前 24 小时预警水质变化风险。',
        chain: '区块链溯源',
        chain_desc: '从鱼苗到餐桌，全链路数据上链，不可篡改，一码通查。'
      }
    },
    nutrition: {
      title: '数据可视化的营养',
      subtitle: '比美味更重要的是健康',
      compare: '营养成分对比 (每100g)',
      protein: '粗蛋白',
      fat: '粗脂肪',
      dha: 'DHA含量',
      sultan: '苏丹鱼',
      perch: '鳜鱼',
      carp: '草鱼',
      desc: '数据来源：南方医科大学营养科研究中心 & 权威检测报告',
      amino_title: '鲜味与活力的秘密：氨基酸谱',
      amino_items: [
        { name: '谷氨酸', val: '2.17g', desc: '鲜味的主要来源，促进大脑机能。' },
        { name: '赖氨酸', val: '必需', desc: '促进钙吸收，加速骨骼生长，增强免疫力。' },
        { name: '天门冬氨酸', val: '1.50g', desc: '消除疲劳，增强体力，与鲜味息息相关。' }
      ],
      collagen_title: '鱼鳞：被忽视的“软黄金”',
      collagen_desc: '苏丹鱼的鱼鳞富含胶原蛋白和有机硒。经过烹饪后软糯可食，是天然的美容护肤食材。',
      benefits_title: '全龄段的营养膳食',
      benefits: [
        { title: '儿童·智力发育', desc: '高含量DHA（脑黄金）促进脑细胞和视网膜发育，增强记忆力。' },
        { title: '女性·美容养颜', desc: '鱼鳞胶原蛋白与低脂高蛋白特性，保持肌肤弹性，健康不长胖。' },
        { title: '长辈·心脑血管', desc: '丰富的EPA帮助降低血液粘稠度，预防动脉硬化，呵护心血管健康。' }
      ]
    },
    brand: {
      title: '关于智鼎农业',
      desc: '佛山市智鼎农业科技发展有限公司，坐落于5A级西樵山风景区下。我们不仅是一家养殖企业，更是国家级热带亚热带名优水产产业园的建设者与运营者。',
      bg_tag: '“百千万工程”重点项目',
      vision_title: '打造热带鱼全产业链生态圈',
      vision_desc: '积极发展“公司+农户”养殖模式，携手合作伙伴构建苏丹鱼可持续发展生态。',
      goals: [
        { val: '3.2万吨', label: '预期年产量' },
        { val: '25.6亿', label: '预期年产值' },
        { val: '6.4亿', label: '预期利润' }
      ],
      founder: 'James Wong',
      founder_role: '马来西亚“忘不了鱼之父” / 品牌形象大使',
      founder_desc: '将马来西亚国宝级苏丹鱼带回中国，结合现代科技，让国人也能品尝到这份珍稀的美味。',
      base_title: '1500亩现代化基地',
      base_desc: '毗邻“中国淡水鱼苗之乡”九江，坐拥西江优质水源。',
      base_list: ['国家热带亚热带名优水产产业园', '"百千万工程"重点项目', '年产值 25.6 亿元'],
      partners: '产学研合作伙伴',
      partner_names: ['华南农业大学', '华南师范大学', '仲恺农业工程学院', '中检溯源'],
      overview_title: '全产业链综合渔业企业',
      overview_intro: '佛山市智鼎农业科技发展有限公司是一家集鱼苗繁育、生态养殖、加工、销售为一体的全产业链综合性渔业企业，承接国家热带亚热带名优水产产业园的建设运营。',
      overview_points: [
        '成功引进马来西亚“忘不了”系列：似野结鱼、苏丹鱼、吉利鱼、野果鱼等热带鱼品种',
        '苏丹鱼、吉利鱼已进入规模化生产并推向全国市场'
      ],
      overview_base: '基地总面积约1500亩（自有养殖面积500+亩，带动农户20多户）',
      advantages_title: '基地优势',
      advantages: [
        '地处西江西东岸、西樵山西南麓，自然环境得天独厚',
        '南海西部水产养殖、加工、物流综合片区核心地段',
        '比邻九江“中国淡水鱼苗之乡”，坐拥种质繁育优势',
        '西江引水工程保障充足自然水源，仿野生态状养殖',
        '南海热电厂热能交换与恒温系统保驾护航',
        '科研团队、养殖团队、市场品牌团队高效产业运营'
      ],
      brand_matrix_title: '多品牌战略矩阵',
      brand_matrix_desc: '针对不同渠道与消费群体，打造差异化品牌IP，覆盖从高端礼赠到日常餐桌。',
      brands: [
        { name: '渔欢仔', desc: '年轻化休闲零食品牌' },
        { name: '浪樵鲜', desc: '地道西樵风味预制菜' },
        { name: '颂鲜令', desc: '高端礼盒定制系列' },
        { name: '海韵潮', desc: '广式风味水产制品' }
      ]
    },
    tourism: {
      title: '西江渔乐城',
      subtitle: '西樵山下的渔旅融合新地标',
      intro: '依托西樵山5A级景区与西江自然风光，打造集“科普、研学、美食、休闲”于一体的大湾区水产文旅综合体。',
      features: [
        { 
          title: '水产博物馆 & 科普研学基地', 
          desc: '展示热带亚热带名优鱼类，开展青少年科普教育。亲手体验鱼苗投放、水质监测，寓教于乐。',
          icon: 'museum',
          img: IMAGES.museum
        },
        { 
          title: '西江渔乐美食城', 
          desc: '汇聚高档私房菜与网红大排档。以帝皇鱼为核心食材，推出“全鱼宴”，满足挑剔味蕾。',
          icon: 'food',
          img: IMAGES.fish_dish
        },
        { 
          title: '广东千古情形象店', 
          desc: '进驻热门景区“广东千古情”，将苏丹鱼作为西樵特色手信，实现文旅流量互通。',
          icon: 'ticket',
          img: IMAGES.eternal
        },
        { 
          title: '休闲垂钓与特色鱼疗', 
          desc: '体验与“水中法拉利”苏丹鱼博弈的垂钓快感；享受独特的鱼疗康养服务。',
          icon: 'fishing',
          img: IMAGES.tourism
        }
      ]
    },
    contact: {
      title: '开启合作新篇章',
      subtitle: '诚邀餐饮、渠道、礼品采购商',
      address: '地址：广东省佛山市南海区西樵镇朝山工业二区5号',
      phone: '电话：13923710623',
      form: {
        name: '姓名',
        contact: '联系方式',
        type: '合作类型',
        msg: '留言内容',
        submit: '发送信息',
        options: ['餐饮采购', '渠道代理', '礼品定制', '其他']
      },
      wechat: '微信公众号'
    },
    footer: {
      desc: '深圳华海农业科技集团有限公司；\n深圳麻省计算机系统有限公司。\n专注于热带亚热带名优水产全产业链发展。\n让世界尝到中国养殖的“忘不了”。',
      links_title: '快速导航',
      contact_title: '联系方式',
      copyright: '© 2025 深圳华海农业科技集团有限公司，深圳麻省计算机系统有限公司. 保留所有权利.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      brand: 'Our Story',
      products: 'Products',
      tech: 'Technology',
      nutrition: 'Nutrition',
      tourism: 'Tourism',
      contact: 'Contact',
      btn: 'Partnership'
    },
    hero: {
      label: 'National Modern Agriculture Park Project',
      h1: 'Unforgettable',
      h1_span: 'Taste',
      p: 'Sultan Fish (Empurau), the "King of River Fish" from Malaysia. With edible scales and fruity aroma. Raised in 25°C constant temperature water powered by green energy.',
      btn1: 'Taste It',
      btn2: 'Learn More',
      stats: [
        { val: '1500 Mu', label: 'Eco-Base' },
        { val: '25℃', label: 'Constant Temp' },
        { val: 'Zero', label: 'Antibiotics' }
      ],
      float_card_1_title: 'Thermal Energy',
      float_card_1_desc: '25℃ Constant Temp',
      float_card_2_title: 'Full Traceability',
      float_card_2_desc: 'One Fish One Code',
      img_tag: 'Sultan Fish (Empurau)',
      img_desc: 'The "Rolls-Royce" of freshwater fish. A gift of time in every bite.'
    },
    usp: {
      title: 'Why is it the "King"?',
      subtitle: 'More than delicious, it is the crystallization of tech & nature',
      items: [
        { title: 'Edible Scales', desc: 'Rich in collagen. Can be steamed (soft) or fried (crispy).' },
        { title: 'Fruity Aroma', desc: 'No black membrane inside. Garlic-clove shaped meat. Sweet & pure.' },
        { title: 'Brain Gold DHA', desc: '100mg/100g DHA content. Far exceeding common carp. Good for kids.' },
        { title: 'Safety Standard', desc: '0 Antibiotics, 0 Hormones, 0 Pesticides, 0 Heavy Metals.' }
      ]
    },
    products: {
      title: 'From Pond to Table',
      subtitle: 'Sultan Fish Series for Every Occasion',
      emperor: {
        name: 'Emperor Fish',
        tag: 'For Banquet',
        desc: '500g-750g. Microcrystalline freezing locks in freshness. Best for steaming.',
        price: 'Premium Box'
      },
      prince: {
        name: 'Prince Fish',
        tag: 'Perfect Snack',
        desc: '25g small fish. Crispy bones. Best for deep-frying or spicy cooking.',
        price: 'Family Pack'
      },
      processed: {
        name: 'Processed Goods',
        tag: 'Future Food',
        desc: 'Fish balls, fish paste, collagen peptide drinks. Nutrient locked.',
        price: 'R&D'
      },
      brands_title: 'Brand IPs',
      brands_list: ['Yu Huan Zai', 'Lang Qiao Xian', 'Song Xian Ling', 'Hai Yun Chao']
    },
    tech: {
      title: 'Smart Fishery 4.0',
      subtitle: 'Technology Empowering Tradition',
      items: [
        { title: 'Thermal Exchange System', desc: 'Using waste steam from power plants to maintain 25°C water year-round, simulating Malaysian tropical environment.', icon: 'thermal', img: IMAGES.tech_thermal },
        { title: 'Eco-Purification', desc: 'Physical + Biological purification. Zero wastewater discharge.', icon: 'water', img: IMAGES.tech_eco },
        { title: 'Digital Traceability', desc: 'Every fish has a digital ID. Full lifecycle tracking from fry to table.', icon: 'cloud', img: IMAGES.tech_data },
        { title: 'Organic Feed', desc: 'Developed with Prof. Wang Anli. Reducing drug use to zero.', icon: 'feed', img: IMAGES.tech_feed }
      ],
      monitor: {
        title: 'Real-time Monitoring',
        temp: '25.0°C',
        temp_label: 'Water Temp',
        ph: '7.5',
        ph_label: 'PH Value',
        do: '7.2 mg/L',
        do_label: 'Dissolved Oxygen',
        status: 'System Normal'
      },
      ai: {
        title: 'AI & Traceability',
        subtitle: 'Data-Driven Trust',
        visual: 'AI Visual Recognition',
        visual_desc: 'Computer vision analyzes fish activity and feeding in real-time.',
        predict: 'Predictive Modeling',
        predict_desc: 'Predicts water changes 24h in advance based on big data.',
        chain: 'Blockchain',
        chain_desc: 'Immutable data from fry to table. Scan to verify.'
      }
    },
    nutrition: {
      title: 'Visualized Nutrition',
      subtitle: 'Healthier than Delicious',
      compare: 'Nutrient Comparison (per 100g)',
      protein: 'Protein',
      fat: 'Fat',
      dha: 'DHA',
      sultan: 'Sultan',
      perch: 'Perch',
      carp: 'Carp',
      desc: 'Source: Southern Medical University Nutrition Research Center',
      amino_title: 'Amino Acid Profile: Secret of Flavor',
      amino_items: [
        { name: 'Glutamic Acid', val: '2.17g', desc: 'Main source of umami flavor, supports brain function.' },
        { name: 'Lysine', val: 'Essential', desc: 'Promotes calcium absorption and growth.' },
        { name: 'Aspartic Acid', val: '1.50g', desc: 'Reduces fatigue, enhances stamina.' }
      ],
      collagen_title: 'Fish Scales: Soft Gold',
      collagen_desc: 'Rich in collagen and organic selenium. Edible after cooking, natural beauty food.',
      benefits_title: 'Benefits for All Ages',
      benefits: [
        { title: 'Kids · Brain', desc: 'High DHA content promotes brain and retina development.' },
        { title: 'Women · Beauty', desc: 'Collagen in scales helps maintain skin elasticity. Low fat.' },
        { title: 'Elders · Heart', desc: 'Rich EPA reduces blood viscosity and protects cardiovascular health.' }
      ]
    },
    brand: {
      title: 'About Zhiding',
      desc: 'Located at the foot of Xiqiao Mountain. We are the builder of the National Tropical Fish Industrial Park.',
      bg_tag: 'Key Project of "100-1000-10000 Project"',
      vision_title: 'Full Industry Chain Ecosystem',
      vision_desc: 'Adopting "Company + Farmer" model to build a sustainable development ecosystem for Sultan Fish.',
      goals: [
        { val: '32k Tons', label: 'Annual Output' },
        { val: '2.56B', label: 'Output Value' },
        { val: '640M', label: 'Profit' }
      ],
      founder: 'James Wong',
      founder_role: 'Father of Empurau / Brand Ambassador',
      founder_desc: 'Bringing the Malaysian national treasure fish to China with modern technology.',
      base_title: '1500 Mu Base',
      base_desc: 'Adjacent to Xijiang River and Xiqiao Mountain.',
      base_list: ['National Tropical Fish Industrial Park', 'Key Project of "100-1000-10000 Project"', 'Annual Output Value 2.56 Billion CNY'],
      partners: 'Strategic Partners',
      partner_names: ['South China Agricultural Univ.', 'South China Normal Univ.', 'Zhongkai Univ. of Agri. & Eng.', 'CCIC Traceability'],
      overview_title: 'Integrated Fishery Enterprise',
      overview_intro: 'Zhiding Agri is a full value-chain fishery company integrating fry breeding, eco-farming, processing, and sales; operator of the national tropical/subtropical aquatic park.',
      overview_points: [
        'Introduced Malaysian “Unforgettable” series: Empurau, Sultan, Jelawat, Wild Fruit Fish and more tropical species',
        'Sultan and Jelawat have entered scaled production and nationwide rollout'
      ],
      overview_base: 'Total base area ~1500 mu (500+ mu self-owned; 20+ farmer partners)',
      advantages_title: 'Base Advantages',
      advantages: [
        'Located on the east bank of Xijiang, near Xiqiao Mountain; superior natural environment',
        'Core zone for Nanhai west aquaculture, processing, and logistics',
        'Next to Jiujiang “hometown of freshwater fry” with seed-stock advantages',
        'Xijiang water diversion secures abundant natural water for near-wild farming',
        'Nanhai thermal power plant provides heat-exchange constant-temp system',
        'Strong R&D, farming, and branding teams for efficient operations'
      ],
      brand_matrix_title: 'Multi-Brand Strategy',
      brand_matrix_desc: 'Differentiated brand IPs for different channels and consumer groups.',
      brands: [
        { name: 'Yu Huan Zai', desc: 'Young Snack Brand' },
        { name: 'Lang Qiao Xian', desc: 'Xiqiao Flavor Pre-made Food' },
        { name: 'Song Xian Ling', desc: 'Premium Gift Series' },
        { name: 'Hai Yun Chao', desc: 'Cantonese Aquatic Products' }
      ]
    },
    tourism: {
      title: 'Xijiang Yule City',
      subtitle: 'Fishery & Tourism Landmark',
      intro: 'Relying on Xiqiao Mountain scenic area, creating a comprehensive complex integrating science, study, food, and leisure.',
      features: [
        { 
          title: 'Museum & Study Base', 
          desc: 'Exhibition of tropical fish. Hands-on experience of fry releasing and water monitoring.',
          icon: 'museum',
          img: IMAGES.museum
        },
        { 
          title: 'Gourmet City', 
          desc: 'Gathering private kitchens. Launching "Full Fish Feast" with Emperor Fish as the core.',
          icon: 'food',
          img: IMAGES.fish_dish
        },
        { 
          title: 'Eternal Love Store', 
          desc: 'Entering "Guangdong Eternal Love" scenic spot. Sultan Fish as a Xiqiao souvenir.',
          icon: 'ticket',
          img: IMAGES.eternal
        },
        { 
          title: 'Leisure Fishing & Spa', 
          desc: 'Experience the fun of fishing Sultan Fish and enjoy unique fish spa services.',
          icon: 'fishing',
          img: IMAGES.tourism
        }
      ],
      hero_title: 'Fishery Fun at Xiqiao',
      hero_desc: 'A comprehensive cultural and tourism landmark integrating science popularization, fishing, fish spa, and gourmet food.'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Business Cooperation',
      address: 'Add: No. 5, Chaoshan Ind. Zone, Xiqiao, Foshan, Guangdong',
      phone: 'Tel: +86 13923710623',
      form: {
        name: 'Name',
        contact: 'Contact',
        type: 'Type',
        msg: 'Message',
        submit: 'Send',
        options: ['Restaurant Procurement', 'Channel Agent', 'Gift Customization', 'Other']
      },
      wechat: 'WeChat Official Account'
    },
    footer: {
      desc: 'Shenzhen Huahai Agriculture Technology Co., Ltd.; \nShenzhen Mazen Computer Systems Co., Ltd.\nFocusing on the whole industry chain of tropical high-quality aquatic products.\nLet the world taste the "Unforgettable" from China.',
      links_title: 'Quick Links',
      contact_title: 'Contact',
      copyright: '© 2025 Shenzhen Huahai Agriculture Technology Co., Ltd., Shenzhen Mazen Computer Systems Co., Ltd. All rights reserved.'
    }
  }
};

// --- 子组件 ---

const SectionTitle = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16 animate-fade-in-up">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <div className={`h-1 w-20 mx-auto rounded-full mb-4 ${light ? 'bg-white/30' : 'bg-teal-500'}`}></div>
    <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>
  </div>
);

// 简单的SVG图标组件
const QuoteIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);

// --- 主页面组件 ---

const HomePage = ({ t, lang, setPage }) => {
  if (!t || !t.hero || !t.usp) return null; // Defensive check
  const [activeMedia, setActiveMedia] = useState(null);
  const galleryMeta = lang === 'zh' 
    ? { title: '走近“忘不了鱼”', subtitle: '快速浏览品牌手册、基地介绍与品控亮点，一目了然的图文画廊。' }
    : { title: 'Discover Unforgettable', subtitle: 'Browse the handbook, company intro, and quality highlights in one glance.' };
  const galleryItems = lang === 'zh' ? [
    { src: IMAGES.handbook, title: '苏丹鱼手册', desc: '全产业链档案，标准化养殖流程' },
    { src: IMAGES.company_intro, title: '公司简介', desc: '企业蓝图与发展路径' },
    { src: IMAGES.fish_intro, title: '苏丹鱼介绍', desc: '国宝级淡水鱼，风味与营养共存' },
    { src: IMAGES.fish_traits, title: '苏丹鱼特性', desc: '果香、可食鳞、胶质丰富' },
    { src: IMAGES.convenience, title: '更便捷', desc: '预制与冷链方案，触达更多餐桌' },
    { src: IMAGES.quality, title: '严格品控', desc: '层层把关，数字化溯源可查' },
  ] : [
    { src: IMAGES.handbook, title: 'Sultan Fish Handbook', desc: 'Full value-chain dossier and standardized farming process.' },
    { src: IMAGES.company_intro, title: 'Company Profile', desc: 'Enterprise blueprint and growth path.' },
    { src: IMAGES.fish_intro, title: 'About Sultan Fish', desc: 'National-treasure freshwater fish with standout flavor and nutrition.' },
    { src: IMAGES.fish_traits, title: 'Fish Traits', desc: 'Fruity aroma, edible scales, collagen-rich.' },
    { src: IMAGES.convenience, title: 'Convenience', desc: 'Ready-to-cook and cold-chain solutions for more tables.' },
    { src: IMAGES.quality, title: 'Quality Control', desc: 'Multi-layer QC with full traceability.' },
  ];

  return (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-2/3 h-full bg-teal-50/50 clip-path-slant"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award size={14} /> {t.hero.label}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
            {t.hero.h1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">{t.hero.h1_span}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
            {t.hero.p}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
              onClick={() => setPage?.('products')}
            >
              {t.hero.btn1} <ArrowRight size={18} />
            </button>
            <button 
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
              onClick={() => setPage?.('brand')}
            >
              {t.hero.btn2} <Users size={18} />
            </button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-slate-200/60">
            {(t.hero.stats || []).map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.val}</div>
                <div className="text-xs text-slate-500 uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px] w-full">
           {/* 主视觉图 */}
           <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-white rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700">
             <img 
               src={IMAGES.hero} 
               alt="Empurau Environment" 
               className="w-full h-full object-contain bg-slate-100 opacity-95 transition-transform duration-700" 
             />
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-teal-500 rounded text-xs font-bold">{t.hero.img_tag}</span>
                </div>
                <p className="text-sm opacity-90">{t.hero.img_desc}</p>
             </div>
           </div>
           
           {/* 悬浮卡片 1 */}
           <div className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow max-w-[200px]">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                 <Sun size={20} />
               </div>
               <div>
                 <div className="text-sm font-bold">{t.hero.float_card_1_title}</div>
                 <div className="text-[10px] text-slate-500">{t.hero.float_card_1_desc}</div>
               </div>
             </div>
           </div>

           {/* 悬浮卡片 2 */}
           <div className="absolute bottom-20 -right-6 bg-white p-4 rounded-xl shadow-xl animate-pulse-slow max-w-[200px]">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                 <ShieldCheck size={20} />
               </div>
               <div>
                 <div className="text-sm font-bold">{t.hero.float_card_2_title}</div>
                 <div className="text-[10px] text-slate-500">{t.hero.float_card_2_desc}</div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>

    {/* USP Section */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.usp.title} subtitle={t.usp.subtitle} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(t.usp.items || []).map((item, i) => (
            <div key={i} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {[<Fish className="text-teal-500"/>, <Leaf className="text-green-500"/>, <Activity className="text-blue-500"/>, <ShieldCheck className="text-purple-500"/>][i]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#22d3ee,transparent_30%),radial-gradient(circle_at_80%_0%,#0ea5e9,transparent_25%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200 mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{galleryMeta.title}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">{galleryMeta.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {galleryItems.map((item, i) => (
            <button 
              key={i} 
              type="button"
              onClick={() => setActiveMedia(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 shadow-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur">#{String(i+1).padStart(2,'0')}</span>
              </div>
              <div className="p-5 bg-gradient-to-t from-slate-900/80 via-slate-900/60 to-transparent absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {activeMedia && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveMedia(null)}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-4 -right-4 bg-white text-slate-900 rounded-full w-10 h-10 shadow-lg flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors" onClick={() => setActiveMedia(null)}>
              <X size={20} />
            </button>
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={activeMedia.src} alt={activeMedia.title} className="w-full max-h-[80vh] object-contain bg-black" />
              <div className="p-4 text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-teal-200 mb-1">Gallery</div>
                <h3 className="text-xl font-bold">{activeMedia.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{activeMedia.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  </div>
)};

const BrandPage = ({ t }) => {
  if (!t || !t.brand) return null; // 防御性检查
  const { brand } = t; // 解构并设定默认值以防万一

  return (
  <div className="pt-24 pb-20 bg-slate-50 animate-fade-in">
    <div className="container mx-auto px-6">
      <SectionTitle title={brand.title} subtitle="Story & Vision" />
      
      {/* 创始人板块 */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-16 flex flex-col md:flex-row">
        <div className="md:w-1/2 relative h-[400px]">
          <img src={IMAGES.james} alt="James Wong" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold">{brand.founder}</h3>
              <p className="opacity-80 text-sm">{brand.founder_role}</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <QuoteIcon className="text-teal-100 w-16 h-16 mb-4" />
          <p className="text-xl text-slate-600 italic mb-8 leading-relaxed">
            "{brand.founder_desc}"
          </p>
          <div className="flex items-center gap-4">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Since 2019</span>
          </div>
        </div>
      </div>

      {/* 企业愿景与基地 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold mb-4">
             {brand.bg_tag}
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">{brand.vision_title}</h3>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed">{brand.vision_desc}</p>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
             {(brand.goals || []).map((g, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl text-center">
                   <div className="text-xl font-bold text-teal-600">{g.val}</div>
                   <div className="text-xs text-slate-400 mt-1">{g.label}</div>
                </div>
             ))}
          </div>

          <h4 className="text-lg font-bold text-slate-900 mb-2">{brand.base_title}</h4>
          <p className="text-sm text-slate-500 mb-6">{brand.base_desc}</p>
          <ul className="space-y-2">
            {(brand.base_list || []).map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                <CheckCircle size={16} className="text-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-teal-500 rounded-3xl rotate-3 transform translate-x-4 translate-y-4 opacity-20"></div>
          <img src={IMAGES.base} alt="Base" className="relative rounded-3xl shadow-xl w-full" />
        </div>
      </div>

      {/* 业务概览与基地优势 */}
      <div className="grid lg:grid-cols-2 gap-10 mb-20">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-bold mb-4">
            <Database size={14}/> {brand.overview_title}
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">{brand.overview_intro}</p>
          <ul className="space-y-3 text-slate-700 text-sm">
            {(brand.overview_points || []).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-teal-500"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 bg-teal-50 rounded-2xl text-teal-700 font-bold text-sm border border-teal-100">
            {brand.overview_base}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl shadow-xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#22d3ee,transparent_30%),radial-gradient(circle_at_80%_0%,#1d4ed8,transparent_25%)]"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-teal-100 rounded-full text-xs font-bold mb-4 border border-white/10">
              <ShieldCheck size={14}/> {brand.advantages_title}
            </div>
            <ul className="space-y-3 text-slate-100 text-sm">
              {(brand.advantages || []).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-teal-300 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 多品牌矩阵 */}
      <div className="mb-20">
         <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">{brand.brand_matrix_title}</h3>
         <p className="text-center text-slate-500 mb-10">{brand.brand_matrix_desc}</p>
         <div className="grid md:grid-cols-4 gap-6">
            {(brand.brands || []).map((b, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-center hover:-translate-y-2 transition-transform cursor-default">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 text-white font-bold text-xl ${i===0?'bg-orange-400':i===1?'bg-green-500':i===2?'bg-purple-500':'bg-blue-500'}`}>
                     {b.name.substring(0,1)}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{b.name}</h4>
                  <p className="text-xs text-slate-400">{b.desc}</p>
               </div>
            ))}
         </div>
      </div>

      {/* 合作伙伴 */}
      <div className="text-center pt-12 border-t border-slate-200">
        <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-8">{brand.partners}</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="text-xl font-bold text-slate-800 flex items-center gap-2"><Microscope size={20}/> {brand.partner_names?.[0] || 'Partner 1'}</div>
          <div className="text-xl font-bold text-slate-800 flex items-center gap-2"><Microscope size={20}/> {brand.partner_names?.[1] || 'Partner 2'}</div>
          <div className="text-xl font-bold text-slate-800 flex items-center gap-2"><Microscope size={20}/> {brand.partner_names?.[2] || 'Partner 3'}</div>
          <div className="text-xl font-bold text-slate-800 flex items-center gap-2"><ShieldCheck size={20}/> {brand.partner_names?.[3] || 'Partner 4'}</div>
        </div>
      </div>
    </div>
  </div>
)};

const ProductsPage = ({ t }) => {
  if (!t || !t.products) return null;
  return (
  <div className="pt-24 pb-20 bg-white animate-fade-in">
    <div className="container mx-auto px-6">
      <SectionTitle title={t.products.title} subtitle={t.products.subtitle} />
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* 产品卡片 1 */}
        <div className="group rounded-[2rem] overflow-hidden bg-slate-900 text-white shadow-2xl relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <div className="h-64 overflow-hidden relative">
            <img src={IMAGES.fish_dish} alt="Emperor Fish" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
              {t.products.emperor.tag}
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-amber-400">{t.products.emperor.name}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
              {t.products.emperor.desc}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <span className="text-sm font-bold text-white">{t.products.emperor.price}</span>
              <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-amber-400 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 产品卡片 2 */}
        <div className="group rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-lg relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <div className="h-64 overflow-hidden relative">
            <img src={IMAGES.fried_fish} alt="Prince Fish" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {t.products.prince.tag}
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">{t.products.prince.name}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
              {t.products.prince.desc}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-slate-200">
              <span className="text-sm font-bold text-slate-600">{t.products.prince.price}</span>
              <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-teal-500 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* 产品卡片 3 */}
        <div className="group rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 shadow-lg relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
          <div className="h-64 overflow-hidden relative bg-slate-200">
            <img src={processedFishImage} alt="Processed Fish Products" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {t.products.processed.tag}
            </div>
          </div>
          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">{t.products.processed.name}</h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
              {t.products.processed.desc}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-slate-300/50">
              <span className="text-sm font-bold text-slate-500 italic">{t.products.processed.price}</span>
              <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm cursor-not-allowed opacity-50">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 品牌IP */}
      <div className="mt-20 text-center">
        <h4 className="font-bold text-slate-400 uppercase tracking-widest mb-8">{t.products.brands_title}</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {(t.products.brands_list || []).map((brand, i) => (
            <span key={i} className="px-6 py-3 bg-white rounded-xl shadow-md border border-slate-100 font-bold text-slate-700 hover:text-teal-600 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)};

const TechPage = ({ t, lang }) => {
  const [data, setData] = useState({ temp: 25.0, ph: 7.5, do: 7.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        temp: (25.0 + (Math.random() * 0.2 - 0.1)).toFixed(1),
        ph: (7.5 + (Math.random() * 0.1 - 0.05)).toFixed(1),
        do: (7.2 + (Math.random() * 0.3 - 0.15)).toFixed(1)
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!t || !t.tech) return null;

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-800 animate-fade-in min-h-screen relative overflow-hidden">
      {/* 浅色背景装饰 */}
      <div className="absolute inset-0 z-0 bg-white">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-teal-50 rounded-bl-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 rounded-tr-full opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title={t.tech.title} subtitle={t.tech.subtitle} />
      
        {/* AI & Traceability Section (Light Version) */}
        <div className="mt-6 md:mt-10 mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
             {/* Background effects */}
             <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-teal-500/20 to-transparent"></div>
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold mb-6 border border-teal-500/30">
                      <BrainCircuit size={14} /> Artificial Intelligence
                   </div>
                   <h3 className="text-4xl font-bold mb-4 text-white">{t.tech.ai.title}</h3>
                   <p className="text-slate-300 mb-10 text-lg leading-relaxed">{t.tech.ai.subtitle}</p>
                   
                   <div className="space-y-8">
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-teal-400">
                            <Scan size={24} />
                         </div>
                         <div>
                            <h5 className="font-bold text-white text-lg mb-1">{t.tech.ai.visual}</h5>
                            <p className="text-sm text-slate-400 leading-relaxed">{t.tech.ai.visual_desc}</p>
                         </div>
                      </div>
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                            <TrendingUp size={24} />
                         </div>
                         <div>
                            <h5 className="font-bold text-white text-lg mb-1">{t.tech.ai.predict}</h5>
                            <p className="text-sm text-slate-400 leading-relaxed">{t.tech.ai.predict_desc}</p>
                         </div>
                      </div>
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-purple-400">
                            <LinkIcon size={24} />
                         </div>
                         <div>
                            <h5 className="font-bold text-white text-lg mb-1">{t.tech.ai.chain}</h5>
                            <p className="text-sm text-slate-400 leading-relaxed">{t.tech.ai.chain_desc}</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Visual Representation */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 aspect-square md:aspect-video flex flex-col justify-center items-center overflow-hidden group">
                    {/* Simulated Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.5)] animate-[scan_3s_ease-in-out_infinite]"></div>
                    
                    <Fingerprint size={140} className="text-white/20 group-hover:text-teal-400/80 transition-colors duration-700" />
                    <div className="mt-8 text-center space-y-2 relative z-10">
                        <div className="text-sm font-mono text-teal-300 animate-pulse">ID: EMP-2023-8892</div>
                        <div className="text-xs font-mono text-slate-400">BLOCK: #8829102...</div>
                        <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-bold mt-2">VERIFIED</div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* 数据仪表盘区域 (浅色版) */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-6 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" className="text-slate-100" fill="transparent" />
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" className="text-orange-500" fill="transparent" strokeDasharray="226" strokeDashoffset="40" />
              </svg>
              <Thermometer className="absolute text-orange-500" size={24} />
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-slate-800">{data.temp}°C</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{t.tech.monitor.temp_label}</div>
              <div className="text-[10px] text-green-600 mt-1 flex items-center gap-1 font-bold"><Zap size={10}/> {t.tech.monitor.status}</div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-6 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" className="text-slate-100" fill="transparent" />
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" className="text-blue-500" fill="transparent" strokeDasharray="226" strokeDashoffset="60" />
              </svg>
              <Droplets className="absolute text-blue-500" size={24} />
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-slate-800">{data.do}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{t.tech.monitor.do_label}</div>
              <div className="text-[10px] text-green-600 mt-1 flex items-center gap-1 font-bold"><Activity size={10}/> Optimal</div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-6 rounded-2xl flex items-center gap-6 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" className="text-slate-100" fill="transparent" />
                <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="4" className="text-purple-500" fill="transparent" strokeDasharray="226" strokeDashoffset="100" />
              </svg>
              <Microscope className="absolute text-purple-500" size={24} />
            </div>
            <div>
              <div className="text-3xl font-bold font-mono text-slate-800">{data.ph}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{t.tech.monitor.ph_label}</div>
              <div className="text-[10px] text-green-600 mt-1 flex items-center gap-1 font-bold"><CheckCircle size={10}/> Balanced</div>
            </div>
          </div>
        </div>
        
        {/* 核心技术图文交错布局 */}
        <div className="space-y-16 lg:space-y-24 mb-24">
          {(t.tech.items || []).map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1 w-full relative group">
                 <div className="absolute inset-0 bg-teal-200 rounded-3xl rotate-3 transition-transform group-hover:rotate-0"></div>
                 <img src={item.img} alt={item.title} className="relative rounded-3xl shadow-xl w-full h-[300px] object-cover bg-slate-200" />
                 <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-teal-600">
                       {/* Icon Switcher */}
                       {item.icon === 'thermal' && <Cpu size={24} />}
                       {item.icon === 'water' && <Radio size={24} />}
                       {item.icon === 'cloud' && <Server size={24} />}
                       {item.icon === 'feed' && <PieChart size={24} />}
                    </div>
                 </div>
              </div>
              <div className="flex-1 space-y-6">
                 <div className="w-12 h-1 bg-teal-500"></div>
                 <h3 className="text-3xl font-bold text-slate-900">{item.title}</h3>
                 <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
                 <button className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    {lang === 'zh' ? '了解更多' : 'Learn more'} <ArrowRight size={18} />
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* 底部科研背书条 */}
        <div className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
           <div className="flex items-center gap-2">
             <Database size={16} /> 
             <span>{lang === 'zh' ? '数据支持：智鼎农业云平台' : 'Data powered by Zhiding Agri Cloud'}</span>
           </div>
           <div className="flex items-center gap-4">
             <span>{lang === 'zh' ? '联合研发：' : 'Co-developed with:'}</span>
             <span className="text-slate-800 font-bold">{lang === 'zh' ? '华南师范大学' : 'South China Normal University'}</span>
             <span className="text-slate-800 font-bold">{lang === 'zh' ? '仲恺农业工程学院' : 'Zhongkai Univ. of Agri. & Eng.'}</span>
           </div>
        </div>
      </div>
      
      {/* 注入动画样式 */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const NutritionPage = ({ t, lang }) => {
  if (!t || !t.nutrition) return null;
  return (
  <div className="pt-24 pb-20 bg-slate-50 animate-fade-in">
    <div className="container mx-auto px-6">
      <SectionTitle title={t.nutrition.title} subtitle={t.nutrition.subtitle} />
      
      {/* Core Data Comparison */}
      <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden max-w-4xl mx-auto mb-20">
        <div className="bg-teal-600 p-8 text-white text-center">
          <h3 className="text-2xl font-bold">{t.nutrition.compare}</h3>
        </div>
        <div className="p-8 md:p-12 space-y-8">
          {/* DHA Chart */}
          <div>
            <div className="flex justify-between mb-2 text-sm font-bold text-slate-700">
              <span>{t.nutrition.dha}</span>
              <span className="text-teal-600">100mg/100g</span>
            </div>
            <div className="space-y-3">
              <div className="relative h-10 bg-slate-100 rounded-full overflow-hidden flex items-center px-4 group cursor-pointer">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-teal-600 w-[95%] shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all duration-1000"></div>
                <span className="relative z-10 text-white font-bold flex justify-between w-full">
                  <span>{t.nutrition.sultan}</span>
                  <span>100mg</span>
                </span>
              </div>
              <div className="relative h-8 bg-slate-100 rounded-full overflow-hidden flex items-center px-4 opacity-60">
                <div className="absolute top-0 left-0 h-full bg-slate-400 w-[18%]"></div>
                <span className="relative z-10 text-slate-600 text-xs font-bold flex justify-between w-full">
                  <span>{t.nutrition.carp}</span>
                  <span>18mg</span>
                </span>
              </div>
            </div>
          </div>

          {/* Protein Chart */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
             <div>
                <div className="text-sm font-bold text-slate-700 mb-4 text-center">{t.nutrition.protein}</div>
                <div className="flex justify-center items-end gap-4 h-48 pt-4">
                  <div className="flex flex-col justify-end items-center h-full gap-2 group">
                      <div className="text-xs font-bold text-slate-600 bg-white/80 px-1.5 py-0.5 rounded shadow-sm group-hover:shadow-md transition">{lang === 'zh' ? '15.9%' : '15.9%'}</div>
                      <div className="w-16 bg-slate-200 rounded-t-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105" style={{ height: '65%' }}>
                        <div className="absolute bottom-2 w-full text-center text-xs font-bold text-slate-600">{t.nutrition.carp}</div>
                      </div>
                   </div>
                   <div className="flex flex-col justify-end items-center h-full gap-2 group">
                      <div className="text-xs font-bold text-teal-800 bg-teal-50 px-1.5 py-0.5 rounded shadow-sm group-hover:shadow-md transition flex items-center gap-1">
                        <Sparkles size={12} className="text-teal-500" />19.1%
                      </div>
                      <div className="w-[4.5rem] bg-gradient-to-t from-teal-600 via-teal-500 to-teal-300 rounded-t-[1rem] relative overflow-hidden shadow-[0_12px_40px_rgba(13,148,136,0.35)] border border-teal-200 transition-transform duration-300 group-hover:scale-115" style={{ height: '100%' }}>
                        <div className="absolute inset-x-0 top-0 h-10 bg-white/10 blur-lg"></div>
                        <div className="absolute bottom-2 w-full text-center text-xs font-bold text-white drop-shadow">{t.nutrition.sultan}</div>
                      </div>
                   </div>
                   <div className="flex flex-col justify-end items-center h-full gap-2 group">
                      <div className="text-xs font-bold text-slate-600 bg-white/80 px-1.5 py-0.5 rounded shadow-sm group-hover:shadow-md transition">17.6%</div>
                      <div className="w-16 bg-slate-300 rounded-t-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105" style={{ height: '75%' }}>
                        <div className="absolute bottom-2 w-full text-center text-xs font-bold text-slate-600">{t.nutrition.perch}</div>
                      </div>
                   </div>
                </div>
             </div>
             <div>
                <div className="text-sm font-bold text-slate-700 mb-4 text-center">{t.nutrition.fat}</div>
                <div className="flex justify-center items-end gap-4 h-48 pt-4">
                   <div className="flex flex-col justify-end items-center h-full gap-2 group">
                      <div className="text-xs font-bold text-slate-600 bg-white/80 px-1.5 py-0.5 rounded shadow-sm group-hover:shadow-md transition">0.6%</div>
                      <div className="w-16 bg-slate-200 rounded-t-xl relative h-[20%] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <div className="absolute bottom-2 w-full text-center text-xs font-bold text-slate-600">{t.nutrition.carp}</div>
                      </div>
                   </div>
                   <div className="flex flex-col justify-end items-center h-full gap-2 group">
                      <div className="text-xs font-bold text-orange-700 bg-white/80 px-1.5 py-0.5 rounded shadow-sm group-hover:shadow-md transition">2.4%</div>
                      <div className="w-16 bg-orange-400 rounded-t-xl relative h-[80%] overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute bottom-2 w-full text-center text-xs font-bold text-white">{t.nutrition.sultan}</div>
                      </div>
                   </div>
                   <div className="flex flex-col justify-end items-center h-full gap-2 group">
                      <div className="text-xs font-bold text-slate-600 bg-white/80 px-1.5 py-0.5 rounded shadow-sm group-hover:shadow-md transition">1.5%</div>
                      <div className="w-16 bg-slate-300 rounded-t-xl relative h-[50%] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <div className="absolute bottom-2 w-full text-center text-xs font-bold text-slate-600">{t.nutrition.perch}</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <p className="text-center text-xs text-slate-400 italic pt-4">{t.nutrition.desc}</p>
        </div>
      </div>

      {/* Amino Acids Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t.nutrition.amino_title}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {(t.nutrition.amino_items || []).map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
              <div className="text-teal-600 font-bold text-xl mb-2">{item.name}</div>
              <div className="text-3xl font-bold text-slate-900 mb-4">{item.val}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fish Scales & Collagen Section */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-12 mb-20">
         <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 lg:h-80">
               <img src={IMAGES.collagen} alt="Fish Scales" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2"><Sparkles size={18}/> Collagen Rich</span>
               </div>
            </div>
         </div>
         <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">{t.nutrition.collagen_title}</h3>
            <p className="text-lg text-slate-500 leading-relaxed">{t.nutrition.collagen_desc}</p>
            <ul className="space-y-3">
               <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-pink-500"/> <span>{lang === 'zh' ? '美容养颜，保持肌肤弹性' : 'Beauty boost with collagen, keeps skin elastic'}</span></li>
               <li className="flex items-center gap-3 text-slate-700"><CheckCircle size={18} className="text-pink-500"/> <span>{lang === 'zh' ? '口感软糯，独家“烫鳞”技法' : 'Soft edible scales with our signature blanching method'}</span></li>
            </ul>
         </div>
      </div>

      {/* Target Audience Benefits */}
      <div>
         <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">{t.nutrition.benefits_title}</h3>
         <div className="grid md:grid-cols-3 gap-8">
            {(t.nutrition.benefits || []).map((item, i) => (
               <div key={i} className="text-center p-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${i===0 ? 'bg-blue-100 text-blue-600' : i===1 ? 'bg-pink-100 text-pink-600' : 'bg-orange-100 text-orange-600'}`}>
                     {[<BrainCircuit size={32}/>, <Smile size={32}/>, <Heart size={32}/>][i]}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
               </div>
            ))}
         </div>
      </div>
    </div>
  </div>
)};

const TourismPage = ({ t, lang }) => {
  if (!t || !t.tourism) return null;
  return (
  <div className="pt-24 pb-20 bg-white animate-fade-in">
    <div className="container mx-auto px-6">
      <SectionTitle title={t.tourism.title} subtitle={t.tourism.subtitle} />
      
      {/* Intro Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
         <p className="text-lg text-slate-500 leading-relaxed">{t.tourism.intro}</p>
      </div>

      {/* Attractions Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-20">
         {(t.tourism.features || []).map((item, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[300px]">
               <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 flex flex-col justify-end">
                  <div className="text-white mb-2 flex items-center gap-2">
                     <span className="p-2 bg-white/20 backdrop-blur rounded-full">
                        {item.icon === 'museum' && <Library size={18} />}
                        {item.icon === 'food' && <Utensils size={18} />}
                        {item.icon === 'ticket' && <Ticket size={18} />}
                        {item.icon === 'fishing' && <Tent size={18} />}
                     </span>
                     <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
               </div>
            </div>
         ))}
      </div>

      {/* CTA Band */}
      <div className="bg-teal-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">{lang === 'zh' ? '想要亲身体验？' : 'Want to experience it?'}</h3>
            <p className="mb-8 max-w-xl mx-auto opacity-90">
              {lang === 'zh' ? '欢迎预约参观考察，品尝正宗苏丹鱼全鱼宴，感受西樵山下的渔乐生活。' : 'Book a visit to taste a full Sultan Fish feast and enjoy the Xiqiao riverside experience.'}
            </p>
            <button className="px-8 py-3 bg-white text-teal-700 font-bold rounded-full hover:bg-teal-50 transition-colors shadow-lg">
               {lang === 'zh' ? '预约参观' : 'Book a Visit'}
            </button>
         </div>
      </div>
    </div>
  </div>
)};

const ContactPage = ({ t }) => {
  if (!t || !t.contact) return null;
  return (
  <div className="pt-24 pb-20 bg-slate-900 text-white animate-fade-in min-h-screen flex items-center">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4">{t.contact.subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t.contact.title}</h3>
          
          <div className="space-y-6 text-slate-400 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="text-teal-500 flex-shrink-0 mt-1" />
              <p>{t.contact.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-teal-500 flex-shrink-0" />
              <p>{t.contact.phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-teal-500 flex-shrink-0" />
              <p>zengweifeng3@163.com</p>
            </div>
          </div>

          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 inline-block">
             <div className="text-xs text-slate-500 mb-4 uppercase tracking-widest">{t.contact.wechat}</div>
             <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center text-slate-900 font-bold text-xs">
                QR CODE
             </div>
          </div>
        </div>

        <form className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.name}</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.contact}</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.type}</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-teal-500 transition-colors">
                {(t.contact.form.options || []).map((opt, i) => <option key={i}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{t.contact.form.msg}</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:border-teal-500 transition-colors"></textarea>
            </div>
            <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-teal-600 transition-colors shadow-lg">
              {t.contact.form.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)};

// --- 根组件 (App) ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('zh');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = CONTENT[lang] || CONTENT['zh']; // Fallback to zh
  const navDark = activePage === 'contact';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, [activePage]);

  // 简单的SVG图标组件
  const QuoteIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
  );

  return (
    <div className="font-sans text-slate-800 antialiased min-h-screen flex flex-col selection:bg-teal-200 selection:text-teal-900 bg-white">
      {/* 导航栏 */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navDark 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4 text-white' 
          : isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 text-slate-900' 
            : 'bg-white/50 backdrop-blur-sm py-5 text-slate-900'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
            <img src={logoImage} alt="Brand Logo" className="w-12 h-12 rounded-lg shadow-md object-cover" />
            <span className={`font-bold text-xl tracking-tight ${navDark ? 'text-white' : 'text-slate-900'}`}>
              {lang === 'zh' ? '忘不了鱼' : 'Unforgettable'}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {['home', 'products', 'brand', 'tech', 'nutrition', 'tourism'].map((key) => (
              <button 
                key={key} 
                onClick={() => setActivePage(key)}
                className={`text-sm font-medium hover:text-teal-400 transition-colors uppercase tracking-wide ${
                  activePage === key 
                    ? (navDark ? 'text-teal-200 font-bold' : 'text-teal-600 font-bold') 
                    : (navDark ? 'text-slate-200' : 'text-slate-500')
                }`}
              >
                {t.nav[key]}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} 
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
                navDark 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button 
              onClick={() => setActivePage('contact')} 
              className={`px-5 py-2.5 text-sm font-bold rounded-full transition-colors shadow-lg ${
                navDark ? 'bg-white text-slate-900 hover:bg-teal-100' : 'bg-slate-900 text-white hover:bg-teal-600'
              }`}
            >
              {t.nav.btn}
            </button>
          </div>

          <button className={`lg:hidden ${navDark ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`absolute top-full left-0 w-full border-t shadow-2xl p-6 flex flex-col gap-4 lg:hidden animate-fade-in-up ${
            navDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-100'
          }`}>
            {['home', 'products', 'brand', 'tech', 'nutrition', 'tourism', 'contact'].map((key) => (
              <button 
                key={key} 
                onClick={() => setActivePage(key)}
                className={`text-left text-lg font-medium py-2 border-b ${
                  navDark ? 'text-white border-white/10' : 'text-slate-700 border-slate-50'
                }`}
              >
                {t.nav[key]}
              </button>
            ))}
            <div className="flex justify-between items-center pt-4">
               <button 
                 onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} 
                 className={`text-sm font-bold flex items-center gap-2 ${navDark ? 'text-slate-200' : 'text-slate-500'}`}
               >
                 <Globe size={16}/> {lang === 'zh' ? 'Switch to English' : '切换中文'}
               </button>
            </div>
          </div>
        )}
      </nav>

      {/* 主体内容 */}
      <main className="flex-grow">
        {activePage === 'home' && <HomePage t={t} lang={lang} setPage={setActivePage} />}
        {activePage === 'brand' && <BrandPage t={t} />}
        {activePage === 'products' && <ProductsPage t={t} />}
        {activePage === 'tech' && <TechPage t={t} lang={lang} />}
        {activePage === 'nutrition' && <NutritionPage t={t} lang={lang} />}
        {activePage === 'tourism' && <TourismPage t={t} lang={lang} />}
        {activePage === 'contact' && <ContactPage t={t} />}
      </main>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src={logoImage} alt="Brand Logo" className="w-10 h-10 rounded-lg shadow-md object-cover" />
                <span className="font-bold text-lg text-white">
                  {lang === 'zh' ? '忘不了鱼' : 'Unforgettable'}
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed mb-6 whitespace-pre-line">
                {t.footer.desc}
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"><Instagram size={16}/></div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors cursor-pointer"><Mail size={16}/></div>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t.footer.links_title}</h5>
              <ul className="space-y-2 text-sm">
                <li onClick={() => setActivePage('home')} className="hover:text-teal-400 cursor-pointer">{t.nav.home}</li>
                <li onClick={() => setActivePage('products')} className="hover:text-teal-400 cursor-pointer">{t.nav.products}</li>
                <li onClick={() => setActivePage('brand')} className="hover:text-teal-400 cursor-pointer">{t.nav.brand}</li>
                <li onClick={() => setActivePage('tech')} className="hover:text-teal-400 cursor-pointer">{t.nav.tech}</li>
                <li onClick={() => setActivePage('nutrition')} className="hover:text-teal-400 cursor-pointer">{t.nav.nutrition}</li>
                <li onClick={() => setActivePage('tourism')} className="hover:text-teal-400 cursor-pointer">{t.nav.tourism}</li>
                <li onClick={() => setActivePage('contact')} className="hover:text-teal-400 cursor-pointer">{t.nav.contact}</li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t.footer.contact_title}</h5>
              <ul className="space-y-2 text-sm">
                <li>{lang === 'zh' ? '电话：13923710623' : 'Tel: +86 13923710623'}</li>
                <li>{lang === 'zh' ? '广东省佛山市南海区' : 'Nanhai District, Foshan, Guangdong'}</li>
                <li>zengweifeng3@163.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs opacity-50">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
