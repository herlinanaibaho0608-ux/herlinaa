var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASI_LN_25K — ADMINISTRASIDESA_AR_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASI_LN_25K — ADMINISTRASIDESA_AR_25K'
            });
var format_ADMINISTRASI_LN_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_2 = format_ADMINISTRASI_LN_25K_2.readFeatures(json_ADMINISTRASI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_2.addFeatures(features_ADMINISTRASI_LN_25K_2);
var lyr_ADMINISTRASI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_2, 
                style: style_ADMINISTRASI_LN_25K_2,
                popuplayertitle: 'ADMINISTRASI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_2.png" /> ADMINISTRASI_LN_25K'
            });

lyr_GoogleSatelit_0.setVisible(true);lyr_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_ADMINISTRASI_LN_25K_2.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1,lyr_ADMINISTRASI_LN_25K_2];
lyr_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASI_LN_25KADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASI_LN_25K_2.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASI_LN_25K_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});