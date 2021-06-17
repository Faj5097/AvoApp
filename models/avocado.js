class Avocado {
  constructor(
    id,
    store,
    company,
    ecoScore,
    ecoComRank,
    ecoPersRank,
    origin,
    originDesc,
    originImg,
    emissions,
    emissionsDesc,
    emissionsImg,
    farming,
    farmingDesc,
    farmingImg
  ) {
    this.id = id;
    this.store = store;
    this.company = company;
    this.ecoScore = ecoScore;
    this.ecoComRank = ecoComRank;
    this.ecoPersRank = ecoPersRank;
    this.origin = origin;
    this.originDesc = originDesc;
    this.originImg = originImg;
    this.emissions = emissions;
    this.emissionsDesc = emissionsDesc;
    this.emissionsImg = emissionsImg;
    this.farming = farming;
    this.farmingDesc = farmingDesc;
    this.farmingImg = farmingImg;
  }
}

export default Avocado;
