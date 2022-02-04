const regionMappings = {
  AP_SOUTH_1: {
    name: 'Asia / India',
  },
}

export function regionParser(regionCode) {
  return regionMappings[regionCode].name
}
