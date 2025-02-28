import { LineDefaultProps } from '@nivo/line'

export default {
    width: 600,
    height: 400,

    margin: {
        top: 50,
        right: 110,
        bottom: 50,
        left: 60,
    },

    xScale: {
        type: 'point',
    },
    xFormat: { format: '', enabled: false },
    yScale: {
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
    },
    yFormat: { format: ' >-.2f', enabled: true },

    curve: LineDefaultProps.curve,

    axisTop: {
        enable: false,
        orient: 'top',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        truncateTickAt: 0,
    },
    axisRight: {
        enable: false,
        orient: 'right',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 0,
        truncateTickAt: 0,
    },
    axisBottom: {
        enable: true,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
    },
    axisLeft: {
        enable: true,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
    },

    enableGridX: LineDefaultProps.enableGridX,
    enableGridY: LineDefaultProps.enableGridY,

    colors: LineDefaultProps.colors,
    lineWidth: 2,

    enablePoints: true,
    pointSize: 10,
    pointColor: { theme: 'background' },
    pointBorderWidth: 2,
    pointBorderColor: { from: 'serieColor' },
    enablePointLabel: LineDefaultProps.enablePointLabel,
    pointLabel: LineDefaultProps.pointLabel,
    pointLabelYOffset: -12,

    enableArea: LineDefaultProps.enableArea,
    areaBlendMode: LineDefaultProps.areaBlendMode,
    areaBaselineValue: LineDefaultProps.areaBaselineValue,
    areaOpacity: LineDefaultProps.areaOpacity,

    isInteractive: LineDefaultProps.isInteractive,
    enableSlices: false,
    debugSlices: false,

    enableCrosshair: true,
    crosshairType: 'bottom-left',
}
