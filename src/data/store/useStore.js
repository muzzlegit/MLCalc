import create from 'zustand'
import { devtools } from 'zustand/middleware'
import units from '../../data/Units.json';
import { UnitAttack } from '../../views/components/UnitCard/index.styled';

export const useStore = create(devtools(set => ({
  mainAttacker: {
    race: 'undead',
    attackRate: 'Min',
    hero: {},
    troops: {
      porter: { ...units.undead.porter.level1 },
      swordsman: { ...units.undead.swordsman.level1 },
      cavalier: { ...units.undead.cavalier.level1 },
      flying: { ...units.undead.flying.level1 },
      archer: { ...units.undead.archer.level1 },
      healer: { ...units.undead.healer.level1 },
      mercenary: { ...units.undead.mercenary.level1 },
      mage: { ...units.undead.mage.level1 }
    },

  },
  mainDefender: {
    race: 'undead',
    attackRate: 'Min',
    hero: {},
    troops: {
      porter: { ...units.undead.porter.level1 },
      swordsman: { ...units.undead.swordsman.level1 },
      cavalier: { ...units.undead.cavalier.level1 },
      flying: { ...units.undead.flying.level1 },
      archer: { ...units.undead.archer.level1 },
      healer: { ...units.undead.healer.level1 },
      mercenary: { ...units.undead.mercenary.level1 },
      mage: { ...units.undead.mage.level1 }
    },
  },

  setMainAttackerRace: (race) => set((state) => (state.mainAttacker.race = race)),
  setMainDefenderRace: (race) => set((state) => (state.mainDefender.race = race)),
  setAttackerUnit: (unit) => {
    switch (unit.unit) {
      case 'porter':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          porter:unit}));
        break;
      case 'swordsman':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          swordsman:unit}));  
        break;
      case 'cavalier':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          cavalier:unit}));
        break;
      case 'flying':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          flying:unit}));  
        break;
      case 'archer':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          archer:unit}));
        break;
      case 'healer':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          healer:unit}));  
        break;
      case 'mercenary':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          mercenary:unit}));   
        break; 
      case 'mage':
        set((state) => (state.mainAttacker.troops = {
          ...state.mainAttacker.troops,
          mage:unit}));
        break;      
      default:
        break;
    }
  },
  setDefenderUnit: (unit) => {
    switch (unit.unit) {
      case 'porter':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          porter:unit}));
        break;
      case 'swordsman':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          swordsman:unit}));  
        break;
      case 'cavalier':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          cavalier:unit}));
        break;
      case 'flying':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          flying:unit}));  
        break;
      case 'archer':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          archer:unit}));
        break;
      case 'healer':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          healer:unit}));  
        break;
      case 'mercenary':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          mercenary:unit}));   
        break; 
      case 'mage':
        set((state) => (state.mainDefender.troops = {
          ...state.mainDefender.troops,
          mage:unit}));
        break;      
      default:
        break;
    }
  },
  setMainAttackerRateAttack: (attackRate) => set((state) => (state.mainAttacker.attackRate = attackRate)),
  setMainDefenderRateAttack: (attackRate) => set((state) => (state.mainDefender.attackRate = attackRate)), 
})))