#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { PlatformPythonTemplateStack } from '../lib/platform-python-template-stack';

const app = new cdk.App();
new PlatformPythonTemplateStack(app, 'PlatformPythonTemplateStack');
