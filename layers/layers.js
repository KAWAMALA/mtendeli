ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([30.865778, -3.436654, 30.914027, -3.406848]);
var wms_layers = [];

var format_MTENDELI2019DISSOLVED_0 = new ol.format.GeoJSON();
var features_MTENDELI2019DISSOLVED_0 = format_MTENDELI2019DISSOLVED_0.readFeatures(json_MTENDELI2019DISSOLVED_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTENDELI2019DISSOLVED_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTENDELI2019DISSOLVED_0.addFeatures(features_MTENDELI2019DISSOLVED_0);
var lyr_MTENDELI2019DISSOLVED_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MTENDELI2019DISSOLVED_0, 
                style: style_MTENDELI2019DISSOLVED_0,
                interactive: true,
    title: 'MTENDELI 2019 DISSOLVED<br />\
    <img src="styles/legend/MTENDELI2019DISSOLVED_0_0.png" /> Built-Up<br />\
    <img src="styles/legend/MTENDELI2019DISSOLVED_0_1.png" /> Trees<br />\
    <img src="styles/legend/MTENDELI2019DISSOLVED_0_2.png" /> Barren<br />'
        });
var format_MTENDELI2020DISSOLVED_1 = new ol.format.GeoJSON();
var features_MTENDELI2020DISSOLVED_1 = format_MTENDELI2020DISSOLVED_1.readFeatures(json_MTENDELI2020DISSOLVED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTENDELI2020DISSOLVED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTENDELI2020DISSOLVED_1.addFeatures(features_MTENDELI2020DISSOLVED_1);
var lyr_MTENDELI2020DISSOLVED_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MTENDELI2020DISSOLVED_1, 
                style: style_MTENDELI2020DISSOLVED_1,
                interactive: true,
    title: 'MTENDELI 2020 DISSOLVED<br />\
    <img src="styles/legend/MTENDELI2020DISSOLVED_1_0.png" /> Built-Up<br />\
    <img src="styles/legend/MTENDELI2020DISSOLVED_1_1.png" /> Trees<br />\
    <img src="styles/legend/MTENDELI2020DISSOLVED_1_2.png" /> Barren<br />'
        });
var format_MTENDELI2021DISSOLVED_2 = new ol.format.GeoJSON();
var features_MTENDELI2021DISSOLVED_2 = format_MTENDELI2021DISSOLVED_2.readFeatures(json_MTENDELI2021DISSOLVED_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTENDELI2021DISSOLVED_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTENDELI2021DISSOLVED_2.addFeatures(features_MTENDELI2021DISSOLVED_2);
var lyr_MTENDELI2021DISSOLVED_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MTENDELI2021DISSOLVED_2, 
                style: style_MTENDELI2021DISSOLVED_2,
                interactive: true,
    title: 'MTENDELI 2021 DISSOLVED<br />\
    <img src="styles/legend/MTENDELI2021DISSOLVED_2_0.png" /> Built-Up<br />\
    <img src="styles/legend/MTENDELI2021DISSOLVED_2_1.png" /> Barren<br />\
    <img src="styles/legend/MTENDELI2021DISSOLVED_2_2.png" /> Trees<br />'
        });
var format_MTENDELI2022DISSOLVED_3 = new ol.format.GeoJSON();
var features_MTENDELI2022DISSOLVED_3 = format_MTENDELI2022DISSOLVED_3.readFeatures(json_MTENDELI2022DISSOLVED_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTENDELI2022DISSOLVED_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTENDELI2022DISSOLVED_3.addFeatures(features_MTENDELI2022DISSOLVED_3);
var lyr_MTENDELI2022DISSOLVED_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MTENDELI2022DISSOLVED_3, 
                style: style_MTENDELI2022DISSOLVED_3,
                interactive: true,
    title: 'MTENDELI 2022 DISSOLVED<br />\
    <img src="styles/legend/MTENDELI2022DISSOLVED_3_0.png" /> Built-Up<br />\
    <img src="styles/legend/MTENDELI2022DISSOLVED_3_1.png" /> Trees<br />\
    <img src="styles/legend/MTENDELI2022DISSOLVED_3_2.png" /> Barren<br />'
        });
var format_MTENDELI2023DISSOLVED_4 = new ol.format.GeoJSON();
var features_MTENDELI2023DISSOLVED_4 = format_MTENDELI2023DISSOLVED_4.readFeatures(json_MTENDELI2023DISSOLVED_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MTENDELI2023DISSOLVED_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTENDELI2023DISSOLVED_4.addFeatures(features_MTENDELI2023DISSOLVED_4);
var lyr_MTENDELI2023DISSOLVED_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MTENDELI2023DISSOLVED_4, 
                style: style_MTENDELI2023DISSOLVED_4,
                interactive: true,
    title: 'MTENDELI 2023 DISSOLVED<br />\
    <img src="styles/legend/MTENDELI2023DISSOLVED_4_0.png" /> Built-Up<br />\
    <img src="styles/legend/MTENDELI2023DISSOLVED_4_1.png" /> Trees<br />\
    <img src="styles/legend/MTENDELI2023DISSOLVED_4_2.png" /> Barren<br />'
        });
var format_ROADS_5 = new ol.format.GeoJSON();
var features_ROADS_5 = format_ROADS_5.readFeatures(json_ROADS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ROADS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_5.addFeatures(features_ROADS_5);
var lyr_ROADS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROADS_5, 
                style: style_ROADS_5,
                interactive: true,
                title: '<img src="styles/legend/ROADS_5.png" /> ROADS'
            });
var format_BUILDINGS_6 = new ol.format.GeoJSON();
var features_BUILDINGS_6 = format_BUILDINGS_6.readFeatures(json_BUILDINGS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BUILDINGS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGS_6.addFeatures(features_BUILDINGS_6);
var lyr_BUILDINGS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDINGS_6, 
                style: style_BUILDINGS_6,
                interactive: true,
                title: '<img src="styles/legend/BUILDINGS_6.png" /> BUILDINGS'
            });

lyr_MTENDELI2019DISSOLVED_0.setVisible(true);lyr_MTENDELI2020DISSOLVED_1.setVisible(true);lyr_MTENDELI2021DISSOLVED_2.setVisible(true);lyr_MTENDELI2022DISSOLVED_3.setVisible(true);lyr_MTENDELI2023DISSOLVED_4.setVisible(true);lyr_ROADS_5.setVisible(true);lyr_BUILDINGS_6.setVisible(true);
var layersList = [lyr_MTENDELI2019DISSOLVED_0,lyr_MTENDELI2020DISSOLVED_1,lyr_MTENDELI2021DISSOLVED_2,lyr_MTENDELI2022DISSOLVED_3,lyr_MTENDELI2023DISSOLVED_4,lyr_ROADS_5,lyr_BUILDINGS_6];
lyr_MTENDELI2019DISSOLVED_0.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'Percentage': 'Percentage', });
lyr_MTENDELI2020DISSOLVED_1.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'Percentage': 'Percentage', });
lyr_MTENDELI2021DISSOLVED_2.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'Percentage': 'Percentage', });
lyr_MTENDELI2022DISSOLVED_3.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'Percentage': 'Percentage', });
lyr_MTENDELI2023DISSOLVED_4.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'Percentage': 'Percentage', });
lyr_ROADS_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BUILDINGS_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MTENDELI2019DISSOLVED_0.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'TextEdit', 'Percentage': 'Range', });
lyr_MTENDELI2020DISSOLVED_1.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'TextEdit', 'Percentage': 'Range', });
lyr_MTENDELI2021DISSOLVED_2.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'TextEdit', 'Percentage': 'Range', });
lyr_MTENDELI2022DISSOLVED_3.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'TextEdit', 'Percentage': 'Range', });
lyr_MTENDELI2023DISSOLVED_4.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'TextEdit', 'Percentage': 'Range', });
lyr_ROADS_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_BUILDINGS_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MTENDELI2019DISSOLVED_0.set('fieldLabels', {'fid': 'no label', 'Classification': 'no label', 'Percentage': 'inline label', });
lyr_MTENDELI2020DISSOLVED_1.set('fieldLabels', {'fid': 'no label', 'Classification': 'no label', 'Percentage': 'inline label', });
lyr_MTENDELI2021DISSOLVED_2.set('fieldLabels', {'fid': 'no label', 'Classification': 'no label', 'Percentage': 'inline label', });
lyr_MTENDELI2022DISSOLVED_3.set('fieldLabels', {'fid': 'no label', 'Classification': 'no label', 'Percentage': 'inline label', });
lyr_MTENDELI2023DISSOLVED_4.set('fieldLabels', {'fid': 'no label', 'Classification': 'no label', 'Percentage': 'inline label', });
lyr_ROADS_5.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'inline label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BUILDINGS_6.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'inline label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BUILDINGS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});