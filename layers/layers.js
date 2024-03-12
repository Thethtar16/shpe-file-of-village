var wms_layers = [];

var format_pl_village_0 = new ol.format.GeoJSON();
var features_pl_village_0 = format_pl_village_0.readFeatures(json_pl_village_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_village_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_village_0.addFeatures(features_pl_village_0);cluster_pl_village_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_pl_village_0
});
var lyr_pl_village_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_pl_village_0, 
                style: style_pl_village_0,
                popuplayertitle: "pl_village",
                interactive: true,
                title: '<img src="styles/legend/pl_village_0.png" /> pl_village'
            });

lyr_pl_village_0.setVisible(true);
var layersList = [lyr_pl_village_0];
lyr_pl_village_0.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', });
lyr_pl_village_0.set('fieldImages', {'NRD_CODE': 'TextEdit', 'VILL_CODE': 'TextEdit', 'VILL_NAM_T': 'TextEdit', 'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', });
lyr_pl_village_0.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', });
lyr_pl_village_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});