// AI助手数据
const aiAssistants = {
    '设计工艺管理助手': {
        title: '设计工艺管理助手',
        description: '基于AI技术的智能设计工艺管理系统，帮助企业优化产品设计流程，提升设计效率和质量。',
        features: [
            '智能设计方案推荐',
            '工艺参数优化建议',
            '设计风险预警',
            '协同设计管理',
            '设计版本控制'
        ]
    },
    '测试助手': {
        title: '测试助手',
        description: 'AI驱动的智能测试系统，自动化产品测试流程，提高测试效率和准确性。',
        features: [
            '自动化测试用例生成',
            '智能缺陷检测',
            '测试数据分析',
            '测试报告自动生成',
            '测试流程优化建议'
        ]
    },
    '智能排产助手': {
        title: '智能排产助手',
        description: '基于AI算法的生产排程优化系统，实现生产资源的最优配置和高效利用。',
        features: [
            '生产计划智能优化',
            '资源配置建议',
            '产能预测分析',
            '紧急订单调度',
            '生产瓶颈识别'
        ]
    },
    '生产质量管理助手': {
        title: '生产质量管理助手',
        description: 'AI质量检测与管理系统，实时监控生产质量，预防质量问题发生。',
        features: [
            '实时质量监控',
            '缺陷智能识别',
            '质量趋势分析',
            '质量改进建议',
            '质量报告自动生成'
        ]
    },
    '库存风险预警助手': {
        title: '库存风险预警助手',
        description: 'AI驱动的库存管理系统，智能预测库存需求，优化库存结构，降低库存风险。',
        features: [
            '库存需求预测',
            '库存风险评估',
            '补货建议优化',
            '滞销商品识别',
            '库存成本分析'
        ]
    },
    '物流管理助手': {
        title: '物流管理助手',
        description: '智能物流调度与管理系统，优化运输路线，提高物流效率，降低物流成本。',
        features: [
            '智能路线规划',
            '运输成本优化',
            '配送时间预测',
            '物流跟踪管理',
            '运力资源调配'
        ]
    },
    '客户情报助手': {
        title: '客户情报助手',
        description: 'AI客户分析系统，深度挖掘客户数据，提供精准的客户洞察和销售建议。',
        features: [
            '客户行为分析',
            '客户价值评估',
            '销售机会识别',
            '客户流失预警',
            '个性化推荐'
        ]
    },
    '产品销售客服': {
        title: '产品销售客服',
        description: '智能销售客服系统，提供7x24小时客户服务，提升客户满意度和销售转化率。',
        features: [
            '智能客户咨询',
            '产品推荐服务',
            '订单处理协助',
            '客户问题解答',
            '销售线索跟进'
        ]
    },
    '设备维修知识助手': {
        title: '设备维修知识助手',
        description: 'AI设备维修专家系统，提供专业的维修指导和故障诊断，提高维修效率。',
        features: [
            '故障智能诊断',
            '维修方案推荐',
            '维修知识库查询',
            '配件需求预测',
            '维修成本分析'
        ]
    },
    '工单管理助手': {
        title: '工单管理助手',
        description: '智能工单处理系统，自动化工单流程，提高服务响应速度和客户满意度。',
        features: [
            '工单智能分类',
            '技师匹配推荐',
            '服务进度跟踪',
            '服务质量评估',
            '工单数据分析'
        ]
    }
};

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取交互元素
    const interactiveElements = document.querySelectorAll('.interactive-element');
    const infoCard = document.getElementById('info-card');
    const cardTitle = document.getElementById('card-title');
    const cardDesc = document.getElementById('card-desc');
    const cardAction = document.getElementById('card-action');
    
    let currentElement = null;
    let hideTimeout = null;

    // AI助手配置数据
    const aiConfigs = {
        'design-process': {
            name: '设计工艺管理助手',
            tag: '研发赋能',
            desc: '智能工艺设计，优化生产流程，提供CAD/CAM集成、工艺参数优化、设计文档管理等功能。',
            features: [
                '智能CAD/CAM集成设计',
                '工艺参数自动优化',
                '设计文档智能管理'
            ]
        },
        'testing': {
            name: '测试助手',
            tag: '研发赋能',
            desc: '智能测试分析，确保产品质量，提供自动化测试、数据分析、质量评估、测试报告生成等功能。',
            features: [
                '自动化测试流程管理',
                '智能数据分析评估',
                '测试报告自动生成'
            ]
        },
        'production-scheduling': {
            name: '智能排产助手',
            tag: '生产赋能',
            desc: '智能排产优化，提升生产效率，提供生产计划制定、设备调度、产能优化、交期预测等功能。',
            features: [
                '智能生产计划制定',
                '设备调度优化算法',
                '交期智能预测分析'
            ]
        },
        'quality-management': {
            name: '生产质量管理助手',
            tag: '生产赋能',
            desc: '全面质量管理，保障产品品质，提供质量检测、问题分析、改进建议、质量追溯等功能。',
            features: [
                '全面质量检测监控',
                '智能问题分析诊断',
                '质量追溯体系管理'
            ]
        },
        'inventory-warning': {
            name: '库存风险预警助手',
            tag: '供应链赋能',
            desc: '智能库存监控，预防断货风险，提供库存监控、需求预测、预警机制、补货建议等功能。',
            features: [
                '实时库存监控分析',
                '智能需求预测算法',
                '风险预警机制管理'
            ]
        },
        'logistics': {
            name: '物流管理助手',
            tag: '供应链赋能',
            desc: '智能物流调度，优化配送效率，提供配送路线规划、运输调度、物流成本优化、实时跟踪等功能。',
            features: [
                '智能配送路线规划',
                '运输调度优化算法',
                '实时物流跟踪监控'
            ]
        },
        'customer-intelligence': {
            name: '客户情报助手',
            tag: '销售赋能',
            desc: '深度客户分析，助力精准营销，提供客户行为分析、市场趋势分析、竞争对手情报、营销策略建议等功能。',
            features: [
                '多源销售数据整合',
                '定制化报告生成',
                '原生集成R1模型，强大情报洞察推理能力'
            ]
        },
        'sales-service': {
            name: '产品销售客服',
            tag: '销售赋能',
            desc: '智能客服服务，提升客户体验，提供产品咨询、订单处理、技术支持、售后服务等功能。',
            features: [
                '智能产品咨询服务',
                '订单自动化处理',
                '全天候技术支持'
            ]
        },
        'repair-knowledge': {
            name: '设备维修知识助手',
            tag: '服务赋能',
            desc: '智能维修指导，快速解决问题，提供设备故障诊断、维修指导、技术培训、知识库管理等功能。',
            features: [
                '智能故障诊断分析',
                '维修指导知识库',
                '技术培训体系管理'
            ]
        },
        'work-order': {
            name: '工单管理助手',
            tag: '服务赋能',
            desc: '智能工单处理，提升服务效率，提供工单创建、分配、跟踪、完成、统计分析等功能。',
            features: [
                '智能工单自动分配',
                '全流程跟踪管理',
                '服务数据统计分析'
            ]
        }
    };

    // 为每个交互元素添加事件监听
    interactiveElements.forEach(element => {
        // 鼠标进入事件
        element.addEventListener('mouseenter', function(e) {
            clearTimeout(hideTimeout);
            currentElement = this;
            
            const aiType = this.getAttribute('data-ai');
            const config = aiConfigs[aiType];
            
            if (config) {
                // 更新卡片内容
                cardTitle.textContent = config.name;
                document.getElementById('card-tag').textContent = config.tag;
                cardDesc.textContent = config.desc;
                
                // 更新特性列表
                const featuresList = document.getElementById('features-list');
                featuresList.innerHTML = '';
                config.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
                
                cardAction.href = `chat.html?type=${aiType}&name=${encodeURIComponent(config.name)}`;
            }
            
            // 显示卡片
            showInfoCard(e);
        });
        
        // 鼠标离开事件
        element.addEventListener('mouseleave', function() {
            hideTimeout = setTimeout(() => {
                hideInfoCard();
            }, 200);
        });
        
        // 点击事件
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const aiType = this.getAttribute('data-ai');
            const aiName = this.getAttribute('data-name');
            
            // 跳转到聊天页面
            window.open(`chat.html?type=${aiType}&name=${encodeURIComponent(aiName)}`, '_blank');
        });
    });

    // 显示信息卡片
    function showInfoCard(event) {
        const elementRect = event.target.getBoundingClientRect();
        const containerRect = document.querySelector('.factory-container').getBoundingClientRect();
        
        // 计算相对于容器的位置
        const relativeLeft = elementRect.left - containerRect.left;
        const relativeTop = elementRect.top - containerRect.top;
        
        // 计算卡片位置 - 正上方居中
        let cardLeft = relativeLeft + elementRect.width / 2 - infoCard.offsetWidth / 2;
        let cardTop = relativeTop - infoCard.offsetHeight - 15;
        
        // 确保卡片不超出容器边界
        if (cardLeft < 10) {
            cardLeft = 10;
        }
        if (cardLeft + infoCard.offsetWidth > containerRect.width - 10) {
            cardLeft = containerRect.width - infoCard.offsetWidth - 10;
        }
        
        // 如果上方空间不够，显示在下方
        if (cardTop < 10) {
            cardTop = relativeTop + elementRect.height + 15;
        }
        
        // 设置卡片位置
        infoCard.style.left = cardLeft + 'px';
        infoCard.style.top = cardTop + 'px';
        
        // 显示卡片
        infoCard.classList.add('show');
    }

    // 隐藏信息卡片
    function hideInfoCard() {
        infoCard.classList.remove('show');
        currentElement = null;
    }

    // 点击卡片外部隐藏卡片
    document.addEventListener('click', function(e) {
        if (!infoCard.contains(e.target) && !e.target.closest('.interactive-element')) {
            hideInfoCard();
        }
    });

    // 卡片本身的事件处理
    infoCard.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeout);
    });

    infoCard.addEventListener('mouseleave', function() {
        if (currentElement) {
            hideTimeout = setTimeout(() => {
                hideInfoCard();
            }, 200);
        }
    });

    // 平滑滚动功能
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    const nav = document.querySelector('.main-nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // 响应式菜单
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // 初始化页面
    initPage();
});

// 页面初始化函数
function initPage() {
    console.log('AI赋能智能工厂样板间已加载');
    
    // 添加页面加载动画
    const factoryContainer = document.querySelector('.factory-container');
    if (factoryContainer) {
        factoryContainer.style.opacity = '0';
        factoryContainer.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            factoryContainer.style.transition = 'all 0.8s ease-out';
            factoryContainer.style.opacity = '1';
            factoryContainer.style.transform = 'translateY(0)';
        }, 100);
    }
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
