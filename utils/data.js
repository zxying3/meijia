// 轮播图的数据图片
function getBannerData(){
  var arr = [
    '/images/banner2.png',
    '/images/banner1.png'
  ]
  return arr
}

//导航数据
function getIndexNavData() {

  var arr = [

    {
      id: 1,
      icon: '../../images/nav_icon_01.png',
      title: '推存'
    },
    {
      id: 2,
      icon: '../../images/nav_icon_02.png',
      title: '美甲'
    },
    {
      id: 3,
      icon: '../../images/nav_icon_03.png',
      title: '美容'
    },
    {
      id: 4,
      icon: '../../images/nav_icon_04.png',
      title: '美发'
    },
    {
      id: 5,
      icon: '../../images/nav_icon_05.png',
      title: '美睫'
    }


  ]

  return arr

}

// list列表
function getIndexNavSectionData() {

  var arr = [

    [


      {
        id:1,
        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "/images/list1.png",
        price: "￥100",
        message: '我们追求得是没有最长的时间特价'

      },

      {
        id: 2,
        subject: "爱丽克EircParisSalon",
        civerpath: "/images/list2.png",
        price: "￥1150",
        message: '我们追求得是没有最长的时间特价'

      },

      {
        id: 3,
        subject: "伊本造型",
        civerpath: "/images/list3.png",
        price: "￥1047",
        message: '伊本造型是由著名形象设计师杨进先生创。'

      },
      {
        id: 4,
        subject: "秋季自然特价美甲",
        civerpath: "/images/list4.png",
        price: "￥187",
        message: '我们追求得是没有最长的时间特价'

      },

      {
        id: 5,
        subject: "画对了妆，微微一笑颜值倍儿高！",
        civerpath: "/images/list3.png",
        price: "￥87",
        message: '剧照简直美腻到不要不要的'

      }

    ],
    [
      {
        id: 1,
        subject: "秋季自然特价美甲",
        civerpath: "/images/list1.png",
        price: "￥187",
        message: '我们追求的是没有最长的时间特价'

      },

      {
        id: 2,
        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "/images/list2.png",
        price: "￥100",
        message: '我们追求的是没有最长的时间特价'

      },

      {
        id: 3,
        subject: "爱丽克EircParisSalon",
        civerpath: "/images/list3.png",
        price: "￥1150",
        message: '七牛云为企业提供对象存储服'

      },
      {
        id: 4,
        subject: "画对了妆，微微一笑颜值倍儿高！",
        civerpath: "/images/list4.png",
        price: "￥87",
        message: '剧照简直美腻到不要不要的'

      }


    ],
    [
      {
        id: 1,
        subject: "秋季自然特价美甲",
        civerpath: "/images/list1.png",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {
        id: 2,
        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "/images/list2.png",
        price: "￥100",
        message: '先的企业级云服务商'

      },

      {
        id:3,
        subject: "爱丽克EircParisSalon",
        civerpath: "/images/list3.png",
        price: "￥1150",
        message: '七牛云为企业提供对象存储服'

      }

    ],
    [
      {
        id: 1,
        subject: "秋季自然特价美甲",
        civerpath: "/images/list1.png",
        price: "￥187",
        message: '我们最求得是没有最长的时间特价'

      },

      {
        id: 2,
        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "/images/list2.png",
        price: "￥100",
        message: '我们追求的是没有最长的时间特价务'

      }

    ],
    [
      {
        id: 1,
        subject: "睫毛稀疏 种睫毛来帮忙",
        civerpath: "/images/list1.png",
        price: "￥100",
        message: '我们追求的是没有最长的时间特价'

      }
    ]

  ]
  return arr
}

// 技师
function getSkillData() {

  var arr = [
    {
      company: "贵阳美容美发有限公司",
      avatar: "/images/list1.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "/images/list1.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "/images/list1.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "/images/list1.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "/images/list1.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    },
    {
      company: "贵阳美容美发有限公司",
      avatar: "/images/list1.png",
      nickname: '张技师',
      price: "￥500",
      message: "从事美发行有40余年，有丰富的经验,淑娴上手",
    }

  ]
  return arr
}

module.exports={
  getBannerData: getBannerData,
  getIndexNavData: getIndexNavData,
  getIndexNavSectionData: getIndexNavSectionData,
  getSkillData: getSkillData
}