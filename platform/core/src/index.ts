import { ExtensionManager, MODULE_TYPES } from './extensions';
import { ServiceProvidersManager, ServicesManager } from './services';
import classes, { CommandsManager, HotkeysManager } from './classes';

import DICOMWeb from './DICOMWeb';
import errorHandler from './errorHandler.js';
import log from './log.js';
import object from './object.js';
import string from './string.js';
import user from './user.js';
import utils from './utils';
import defaults from './defaults';
import * as Types from './types';
import * as Enums from './enums';
import { useToolbar } from './hooks/useToolbar';
import {
  CineService,
  UIDialogService,
  UIModalService,
  UINotificationService,
  UIViewportDialogService,
  //
  DicomMetadataStore,
  DisplaySetService,
  ToolbarService,
  MeasurementService,
  ViewportGridService,
  HangingProtocolService,
  pubSubServiceInterface,
  PubSubService,
  UserAuthenticationService,
  CustomizationService,
  PanelService,
  WorkflowStepsService,
  StudyPrefetcherService,
} from './services';

import { DisplaySetMessage, DisplaySetMessageList } from './services/DisplaySetService';

import IWebApiDataSource from './DataSources/IWebApiDataSource';
import useActiveViewportDisplaySets from './hooks/useActiveViewportDisplaySets';

const hotkeys = {
  ...utils.hotkeys,
  defaults: { hotkeyBindings: defaults.hotkeyBindings },
};

const OHIF = {
  MODULE_TYPES,
  //
  CommandsManager,
  ExtensionManager,
  HotkeysManager,
  ServicesManager,
  ServiceProvidersManager,
  //
  defaults,
  utils,
  hotkeys,
  classes,
  string,
  user,
  errorHandler,
  object,
  log,
  DICOMWeb,
  viewer: {},
  //
  CineService,
  CustomizationService,
  UIDialogService,
  UIModalService,
  UINotificationService,
  UIViewportDialogService,
  DisplaySetService,
  MeasurementService,
  ToolbarService,
  ViewportGridService,
  HangingProtocolService,
  UserAuthenticationService,
  IWebApiDataSource,
  DicomMetadataStore,
  pubSubServiceInterface,
  PubSubService,
  PanelService,
  useToolbar,
  useActiveViewportDisplaySets,
  WorkflowStepsService,
  StudyPrefetcherService,
};

export {
  MODULE_TYPES,
  //
  CommandsManager,
  ExtensionManager,
  HotkeysManager,
  ServicesManager,
  ServiceProvidersManager,
  //
  defaults,
  utils,
  hotkeys,
  classes,
  string,
  user,
  errorHandler,
  object,
  log,
  DICOMWeb,
  //
  CineService,
  CustomizationService,
  UIDialogService,
  UIModalService,
  UINotificationService,
  UIViewportDialogService,
  DisplaySetService,
  DisplaySetMessage,
  DisplaySetMessageList,
  MeasurementService,
  ToolbarService,
  ViewportGridService,
  HangingProtocolService,
  UserAuthenticationService,
  IWebApiDataSource,
  DicomMetadataStore,
  pubSubServiceInterface,
  PubSubService,
  Enums,
  PanelService,
  WorkflowStepsService,
  StudyPrefetcherService,
  useToolbar,
  useActiveViewportDisplaySets,
};

export { OHIF };

export type { Types };

export default OHIF;
