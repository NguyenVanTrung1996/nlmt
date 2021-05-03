const state = {
    projectCategories: [{
        id: 1, name: "Doanh nghiệp", projects: [
            {
                id: 7, name: `Dự án ĐMT<br/> Chiến Thắng - Bình Thuận`,
                images: ["ct1.jpeg", "ct2.jpeg", "ct3.jpeg"], wattage: "1MW", description: `
                <strong>Địa điểm:</strong> KCN Phan Thiết tỉnh Bình Thuận.<br/>
                <strong>Chủ đầu tư:</strong> Công ty TNHH sản xuất và thương mai Chiến Thắng.
                ` },
            {
                id: 8, name: `Dự án ĐMT <br/>Vạn Xuân - Long An`,
                images: ["vx1.jpeg", "vx2.jpeg", "vx3.jpeg"], wattage: "500kW", description: `
                <strong>Địa điểm:</strong> Huyện Châu Thành tỉnh Long An.<br/>
                <strong>Chủ đầu tư:</strong> Cty cổ phần vận tải Tân Nam Chinh
                ` },
            {
                id: 9, name: `Dự án ĐMT<br/> Vạn Xuân - Bình Thuận`,
                images: ["vxx1.jpeg", "vxx2.jpeg", "vxx3.jpeg"], wattage: "250kW", description: `
                <strong>Địa điểm:</strong> Huyện Hàm Thuận Nam tỉnh Bình Thuận.<br/>
                <strong>Chủ đầu tư:</strong> Cty cổ phần vận tải Tân Nam Chinh
                ` },
            {
                id: 10, name: `Dự án ĐMT <br/>Phước Sơn - Bình Định`,
                images: ["ps1.jpeg", "ps2.jpeg", "ps3.jpeg"], wattage: "712kW", description: `
                <strong>Địa điểm:</strong> Huyện Tuy Phước tỉnh Bình Định<br/>
                <strong>Chủ đầu tư:</strong> Cty cổ phần may Phước Sơn
                ` },
            {
                id: 11, name: "Dự án ĐMT <br/>Chư Pưh - Gia Lai",
                images: ["gl1.jpeg", "gl2.jpeg", "gl3.jpeg"], wattage: "2MW", description:
                    `<strong>Địa điểm:</strong> Huyện Chư Pưh tỉnh Gia Lai<br/>
                <strong>Chủ đầu tư:</strong> cty cổ phần xây lắp 3-Petrolimex`},
            {
                id: 12, name: "Dự án ĐMT <br/> Liên Hiệp - Gia Lai",
                images: ["lh1.jpeg", "lh2.jpeg", "lh3.jpeg"], wattage: "3MW", description:
                    `<strong>Địa điểm:</strong> Huyện Iagrai tỉnh Gia Lai<br/>
                    <strong>Chủ đầu tư:</strong> Liên danh các nhà đầu tư nước ngoài.` },
            {
                id: 13, name: "Dự án điện Công nghiệp <br/>  Sunny Thái Nguyên",
                images: ["tn1.jpeg", "tn2.jpeg", "tn3.jpeg"], wattage: "N/A", description:
                    `<strong>Địa điểm:</strong> Tx Phổ Yên tỉnh Thái Nguyên<br/>
                            <strong>Chủ đầu tư:</strong> Cty cổ phần Sunny`
            },
        ]
    },
        // {
        //     id: 2, name: "Hộ gia đình", projects: [
        //         { id: 15, name: "Hộ gia đình Bắc Giang", image: "project2.jpeg" },
        //         { id: 16, name: "Hộ gia đình Bắc Ninh", image: "project2.jpeg" },
        //         { id: 17, name: "Hộ gia đình Đồng Nai", image: "project2.jpeg" },
        //         { id: 18, name: "Hộ gia đình Thái Nguyên", image: "project2.jpeg" },
        //         { id: 19, name: "Hộ gia đình Cao Bằng", image: "project2.jpeg" },
        //         { id: 20, name: "Hộ gia đình Lạng Sơn", image: "project2.jpeg" }
        //     ]
        // },
    ]
}

const getters = {
    getProjectCategories(state) {
        return state.projectCategories
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
