const getOptionPropertys = ({ defaultValue: dv = null } = {}) => {
  return {
    optionName: dv,
    optionStatus: dv,
    line: dv,
    system: dv,
    intvs: [],
  };
};

const getOptionIntvPropertys = ({ defaultValue: dv = null } = {}) => {
  return {
    line: dv,
    system: dv,
    subSystem: dv,
    type: dv,
    subType: dv,
    intvYear: dv,
    intvStatus: dv,
    scopeDetail: {},
  };
};

const getIntvFormPropertys = ({ defaultValue: dv = null } = {}) => {
  return {
    qty: dv,
    unitCost: dv,
    totalCost: dv,
    unitCost2: dv,
    totalCost2: dv,
    maintenanceYearList: [],
  };
};

export { getOptionPropertys, getOptionIntvPropertys, getIntvFormPropertys };
