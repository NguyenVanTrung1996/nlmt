const state = {
    categories: [{
        id: 1, name: "Inverter", products: [
            { id: 1, name: "SUNNY TRIPOWER 3.0 / 4.0 / 5.0 / 6.0", image: "sma-stp3.png", description: "" },
            { id: 2, name: "SUNNY TRIPOWER 15000TL / 20000TL / 25000TL", image: "sma-stp5.png", description: "" },
            { id: 3, name: "Fronius", image: "Fronius.jpeg", description: "" },
            { id: 4, name: "Huawei", image: "Huawei.png", description: "" }
        ]
    },
    {
        id: 2, name: "Tấm pin NLMT", products: [
            { id: 7, name: "QCELLS", image: "qc.jpeg", description: "" },
            { id: 8, name: "JA Solar", image: "ja.png", description: "" },
            { id: 9, name: "AE Solar", image: "ae.jpeg", description: "" },
            { id: 10, name: "CanadianS", image: "can.png", description: "" },
        ]
    },
    {
        id: 3, name: "Đèn NLMT", products: [
            { id: 13, name: "Đèn đường NLMT tích hợp pin liền", image: "den1.png", description: "" },
            { id: 14, name: "Đèn đường NLMT tích hợp tấm pin rời", image: "den2.png", description: "" },
            { id: 15, name: "Đèn pha LED NLMT", image: "den3.png", description: "" },
            { id: 16, name: "Bóng đèn búp NLMT", image: "den4.png", description: "" },
            { id: 17, name: "Đèn LED pha NLMT", image: "den5.png", description: "" },
        ]
    },
    {
        id: 4, name: "Quạt NLMT", products: [
            {
                id: 13, name: "Quạt năng lượng mặt trời - 12V(18W - 20W)", image: "quat1.jpeg", description: `Động cơ: 755 <br/>
                                Điện áp: 12V <br/>
                                Công suất: 18W - 20W<br/>
                                Chất liệu: nhựa<br/>
                                Độ cao: 1.4mm<br/>
                                Trọng lượng: 4.5kg<br/>
                                Lồng quạt: lồng đường dây vòng đôi 108 nhánh 430mm<br/>
                                Tốc độ bánh răng: bộ điều chỉnh 3 tốc độ bánh răng<br/>
                                Có thể điều chỉnh đầu quạt<br/>
                                Cài đặt thời gian: 60 phút<br/>
                                Cánh quạt: Cánh AS<br/>
                                Đầu cắm: dây cáp điện DC<br/>
            ` },
            {
                id: 14, name: "Quạt năng lượng mặt trời - 7.5V(18W - 20W)", image: "quat1.jpeg", description: `Động cơ: 755<br/>
                                Điện áp: 7.4V<br/>
                                Công suất: 18W - 20W<br/>
                                Chất liệu: nhựa<br/>
                                Độ cao: 1.4mm<br/>
                                Trọng lượng: 4.5kg<br/>
                                Lồng quạt: lồng đường dây vòng đôi 108 nhánh 430mm<br/>
                                Tốc độ bánh răng: bộ điều chỉnh 3 tốc độ bánh răng<br/>
                                Có thể điều chỉnh đầu quạt<br/>
                                Cài đặt thời gian: 60 phút<br/>
                                Cánh quạt: Cánh AS<br/>
                                Đầu cắm: dây cáp điện DC<br/>
            ` },
            {
                id: 15, name: "Quạt năng lượng mặt trời - 12V(15W)", image: "quat1.jpeg", description: `Động cơ: 555<br/>
                    Điện áp: 12V<br/>
                    Công suất: 15W <br/>
                    Chất liệu: nhựa<br/>
                    Độ cao: 1.2mm<br/>
                    Trọng lượng: 2.5kg    4.5kg<br/>
                    Lồng quạt: lồng đường dây vòng đơn 96 nhánh 430mm<br/>
                    Tốc độ bánh răng: bộ điều chỉnh 3 tốc độ bánh răng<br/>
                    Có thể điều chỉnh đầu quạt<br/>
                    Cài đặt thời gian: 60 phút<br/>
                    Cánh quạt: Cánh nhựa PP<br/>
                    Đầu cắm: dây cáp điện DC<br/>
            ` },
            {
                id: 16, name: "Quạt năng lượng mặt trời - 7.5V(15W)", image: "quat1.jpeg", description: `Động cơ: 555<br/>
                    Điện áp: 7.4V<br/>
                    Công suất: 15W <br/>
                    Chất liệu: nhựa<br/>
                    Độ cao: 1.2mm<br/>
                    Trọng lượng: 2.5kg    4.5kg<br/>
                    Lồng quạt: lồng đường dây vòng đơn 96 nhánh 430mm<br/>
                    Tốc độ bánh răng: bộ điều chỉnh 3 tốc độ bánh răng<br/>
                    Có thể điều chỉnh đầu quạt<br/>
                    Cài đặt thời gian: 60 phút<br/>
                    Cánh quạt: Cánh nhựa PP<br/>
                    Đầu cắm: dây cáp điện DC<br/>
            ` },
        ]
    }]
}

const getters = {
    getCategories(state) {
        return state.categories
    }
}

const mutations = {

}

const actions = {

}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}
