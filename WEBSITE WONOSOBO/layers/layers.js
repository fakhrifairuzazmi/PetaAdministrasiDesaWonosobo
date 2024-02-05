var wms_layers = [];

var format_Kecamatan_0 = new ol.format.GeoJSON();
var features_Kecamatan_0 = format_Kecamatan_0.readFeatures(json_Kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_0.addFeatures(features_Kecamatan_0);
var lyr_Kecamatan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_0, 
                style: style_Kecamatan_0,
                interactive: false,
                title: '<img src="styles/legend/Kecamatan_0.png" /> Kecamatan'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> Alian<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> Banjarnega<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> Batur<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> Bawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> Bener<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> Bruno<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> Candiroto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> Garung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_8.png" /> Gebang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_9.png" /> Kajoran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_10.png" /> Kalibawang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_11.png" /> Kalikajar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_12.png" /> Kaliwiro<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_13.png" /> Karangsamb<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_14.png" /> Kejajar<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_15.png" /> Kendal<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_16.png" /> Kepil<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_17.png" /> Kertek<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_18.png" /> Kledung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_19.png" /> Leksono<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_20.png" /> Madukara<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_21.png" /> Mojotengah<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_22.png" /> Padureso<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_23.png" /> Pagentan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_24.png" /> Pejawaran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_25.png" /> Pituruh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_26.png" /> Plantungan<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_27.png" /> Sadang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_28.png" /> Sapuran<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_29.png" /> Selomerto<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_30.png" /> Sigaluh<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_31.png" /> Sukoharjo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_32.png" /> Temanggung<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_33.png" /> Wadaslinta<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_34.png" /> Watumalang<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_35.png" /> Wonoboyo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_36.png" /> Wonosobo<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_37.png" /> <br />'
        });

lyr_Kecamatan_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_Kecamatan_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_Kecamatan_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Provinsi': 'Provinsi', 'Desa': 'Desa', 'Luas': 'Luas', });
lyr_Kecamatan_0.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Provinsi': 'TextEdit', 'Desa': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Kecamatan_0.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'Kecamatan': 'inline label', 'Provinsi': 'inline label', 'Desa': 'inline label', 'Luas': 'inline label', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});