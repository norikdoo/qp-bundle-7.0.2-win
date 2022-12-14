/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "QP/C++", "index.html", [
    [ "Overview", "index.html", [
      [ "What is it?", "index.html#over_about", null ],
      [ "What does it do?", "index.html#over_goals", null ],
      [ "What's special about it?", "index.html#over_special", [
        [ "Object Orientation", "index.html#over_oop", null ],
        [ "Hierarchical State Machines", "index.html#over_hsms", null ],
        [ "Built-in Kernels", "index.html#over_kernels", null ],
        [ "Efficiency", "index.html#over_eff", null ],
        [ "Simplicity", "index.html#over_simple", null ],
        [ "Interoperability", "index.html#over_inter", null ],
        [ "Traceability", "index.html#over_trace", null ],
        [ "Popularity & Maturity", "index.html#over_popular", null ],
        [ "Widespread Use", "index.html#over_use", null ],
        [ "Books", "index.html#over_psicc2", null ]
      ] ],
      [ "How is it licensed?", "index.html#over_licensing", [
        [ "Open Source Projects", "index.html#over_open-source", null ],
        [ "Closed Source Projects", "index.html#over_closed-source", null ]
      ] ],
      [ "How to get help?", "index.html#over_support", null ],
      [ "Contact Information", "index.html#over_contact", null ]
    ] ],
    [ "Getting Started", "gs.html", "gs" ],
    [ "Examples", "exa.html", "exa" ],
    [ "Ports", "ports.html", "ports" ],
    [ "API Reference", "api.html", [
      [ "QEP (Hierarchical State Machines)", "api.html#api_qep", [
        [ "Hierarchical State Machines", "api.html#api_qep_hsm", null ]
      ] ],
      [ "QF (Active Object Framework)", "api.html#api_qf", [
        [ "Active Objects", "api.html#api_qf_act", null ],
        [ "Publish-Subscribe", "api.html#api_qf_ps", null ],
        [ "Event Management", "api.html#api_qf_evt", null ],
        [ "Time Events", "api.html#api_qf_time", null ],
        [ "Event Queues (raw thread-safe)", "api.html#api_qf_queue", null ],
        [ "Memory Pools", "api.html#api_qf_mem", null ]
      ] ],
      [ "QS (\"Quantum Spy\" Software Tracing)", "api.html#api_qs", [
        [ "QS Initialization and Control", "api.html#api_qs_ini", null ],
        [ "QS Receive-Channel (QS-RX)", "api.html#api_qs_rx", null ],
        [ "QS Filters", "api.html#api_qs_filter", null ],
        [ "QS Dictionaries", "api.html#api_qs_dict", null ],
        [ "QS Application-Specific Records", "api.html#api_qs_user", null ]
      ] ],
      [ "QV (Cooperative Kernel)", "api.html#api_qv", [
        [ "Kernel Initialization and Control", "api.html#api_qv_init", null ]
      ] ],
      [ "QK (Preemptive Run-to-Completion Kernel)", "api.html#api_qk", [
        [ "Kernel Initialization and Control", "api.html#api_qk_ctrl", null ],
        [ "Interrupt Management", "api.html#api_qk_isr", null ]
      ] ],
      [ "QXK (Preemptive Dual-Mode Run-to-Completion/Blocking RTOS Kernel)", "api.html#api_qxk", [
        [ "Kernel Initialization and Control", "api.html#api_qxk_ctrl", null ],
        [ "Interrupt Management", "api.html#api_qxk_isr", null ],
        [ "Extended Thread Management", "api.html#api_qxk_xthr", null ],
        [ "Semaphores", "api.html#api_qxk_sema", null ],
        [ "Mutexes", "api.html#api_qxk_mutex", null ],
        [ "Message Queues", "api.html#api_qxk_queue", null ],
        [ "Memory Pools", "api.html#api_qxk_mem", null ]
      ] ]
    ] ],
    [ "Deprecated APIs", "deprecated.html", null ],
    [ "Revision History", "history.html", [
      [ "Version 7.0.2, 2022-08-12", "history.html#qpcpp_7_0_2", null ],
      [ "Version 7.0.1, 2022-07-31", "history.html#qpcpp_7_0_1", null ],
      [ "Version 7.0.0, 2022-04-30", "history.html#qpcpp_7_0_0", null ],
      [ "Version 6.9.3, 2021-04-12", "history.html#qpcpp_6_9_3", null ],
      [ "Version 6.9.2, 2021-01-18", "history.html#qpcpp_6_9_2", null ],
      [ "Version 6.9.1, 2020-09-28", "history.html#qpcpp_6_9_1", null ],
      [ "Version 6.9.0, 2020-08-21", "history.html#qpcpp_6_9_0", null ],
      [ "Version 6.8.2, 2020-07-17", "history.html#qpcpp_6_8_2", null ],
      [ "Version 6.8.1, 2020-04-04", "history.html#qpcpp_6_8_1", null ],
      [ "Version 6.8.0, 2020-03-21", "history.html#qpcpp_6_8_0", null ],
      [ "Version 6.7.0, 2019-12-30", "history.html#qpcpp_6_7_0", null ],
      [ "Version 6.6.0, 2019-10-31", "history.html#qpcpp_6_6_0", null ],
      [ "Version 6.5.1, 2019-05-24", "history.html#qpcpp_6_5_1", null ],
      [ "Version 6.5.0, 2019-03-30", "history.html#qpcpp_6_5_0", null ],
      [ "Version 6.4.0, 2019-02-10", "history.html#qpcpp_6_4_0", null ],
      [ "Version 6.3.8, 2018-12-31", "history.html#qpcpp_6_3_8", null ],
      [ "Version 6.3.7, 2018-11-20", "history.html#qpcpp_6_3_7", null ],
      [ "Version 6.3.6, 2018-10-20", "history.html#qpcpp_6_3_6", null ],
      [ "Version 6.3.4, 2018-08-10", "history.html#qpcpp_6_3_4", null ],
      [ "Version 6.3.3a, 2018-07-16", "history.html#qpcpp_6_3_3a", null ],
      [ "Version 6.3.3, 2018-06-22", "history.html#qpcpp_6_3_3", null ],
      [ "Version 6.3.2, 2018-06-20", "history.html#qpcpp_6_3_2", null ],
      [ "Version 6.3.1, 2018-05-24", "history.html#qpcpp_6_3_1", null ],
      [ "Version 6.3.0, 2018-05-10", "history.html#qpcpp_6_3_0", null ],
      [ "Version 6.2.0, 2018-03-16", "history.html#qpcpp_6_2_2", null ],
      [ "Version 6.1.1, 2018-02-18", "history.html#qpcpp_6_1_1", null ],
      [ "Version 6.1.0, 2018-02-04", "history.html#qpcpp_6_1_0", null ],
      [ "Version 6.0.4, 2018-01-10", "history.html#qpcpp_6_0_4", null ],
      [ "Version 6.0.3, 2017-12-12", "history.html#qpcpp_6_0_3", null ],
      [ "Version 6.0.1, 2017-12-10", "history.html#qpcpp_6_0_1", null ],
      [ "Version 6.0.0, 2017-10-13", "history.html#qpcpp_6_0_0", null ],
      [ "Version 5.9.9, 2017-09-29", "history.html#qpcpp_5_9_9", null ],
      [ "Version 5.9.8, 2017-09-15", "history.html#qpcpp_5_9_8", null ],
      [ "Version 5.9.7, 2017-08-18", "history.html#qpcpp_5_9_7", null ],
      [ "Version 5.9.6, 2017-08-04", "history.html#qpcpp_5_9_6", null ],
      [ "Version 5.9.5, 2017-07-20", "history.html#qpcpp_5_9_5", null ],
      [ "Version 5.9.4, 2017-07-07", "history.html#qpcpp_5_9_4", null ],
      [ "Version 5.9.3, 2017-06-19", "history.html#qpcpp_5_9_3", null ],
      [ "Version 5.9.2, 2017-06-05", "history.html#qpcpp_5_9_2", null ],
      [ "Version 5.9.1, 2017-05-26", "history.html#qpcpp_5_9_1", null ],
      [ "Version 5.9.0, 2017-05-19", "history.html#qpcpp_5_9_0", null ],
      [ "Version 5.8.2, 2017-02-08", "history.html#qpcpp_5_8_2", null ],
      [ "Version 5.8.1, 2016-12-16", "history.html#qpcpp_5_8_1", null ],
      [ "Version 5.8.0, 2016-11-30", "history.html#qpcpp_5_8_0", null ],
      [ "Version 5.7.4, 2016-11-04", "history.html#qpcpp_5_7_4", null ],
      [ "Version 5.7.3, 2016-10-07", "history.html#qpcpp_5_7_3", null ],
      [ "Version 5.7.2, 2016-09-30", "history.html#qpcpp_5_7_2", null ],
      [ "Version 5.7.0, 2016-08-31", "history.html#qpcpp_5_7_0", null ],
      [ "Version 5.6.5, 2016-06-06", "history.html#qpcpp_5_6_5", null ],
      [ "Version 5.6.4, 2016-04-25", "history.html#qpcpp_5_6_4", null ],
      [ "Version 5.6.3, 2016-04-12", "history.html#qpcpp_5_6_3", null ],
      [ "Version 5.6.2, 2016-03-31", "history.html#qpcpp_5_6_2", null ],
      [ "Version 5.6.1, 2016-01-01", "history.html#qpcpp_5_6_1", null ],
      [ "Version 5.5.1, 2015-10-05", "history.html#qpcpp_5_5_1", null ],
      [ "Version 5.5.0, 2015-09-28", "history.html#qpcpp_5_5_0", null ],
      [ "Version 5.4.2, 2015-06-06", "history.html#qpcpp_5_4_2", null ],
      [ "Version 5.4.1, 2015-05-21", "history.html#qpcpp_5_4_1", null ],
      [ "Version 5.4.0, 2015-05-14", "history.html#qpcpp_5_4_0", null ],
      [ "Version 5.3.1, 2014-09-20", "history.html#qpcpp_5_3_1", null ],
      [ "Version 5.3.0, 2014-04-14", "history.html#qpcpp_5_3_0", null ],
      [ "Version 5.2.1, 2014-01-06", "history.html#qpcpp_5_2_1", null ],
      [ "Version 5.2.0, 2013-12-28", "history.html#qpcpp_5_2_0", null ],
      [ "Version 5.1.1, 2013-10-10", "history.html#qpcpp_5_1_1", null ],
      [ "Version 5.1.0, 2013-10-02", "history.html#qpcpp_5_1_0", null ],
      [ "Version 4.5.04, 2013-02-10", "history.html#qpcpp_4_5_04", null ],
      [ "Version 4.5.03, 2012-11-29", "history.html#qpcpp_4_5_03", null ],
      [ "Version 4.5.02, 2012-08-15", "history.html#qpcpp_4_5_02", null ],
      [ "Version 4.5.01, 2012-06-14", "history.html#qpcpp_4_5_01", null ],
      [ "Version 4.5.00, 2012-05-26", "history.html#qpcpp_4_5_00", null ],
      [ "Version 4.4.00, 2012-05-02", "history.html#qpcpp_4_4_00", null ],
      [ "Version 4.3.00, 2011-11-03", "history.html#qpcpp_4_3_00", null ],
      [ "Version 4.2.04, 2011-09-24", "history.html#qpcpp_4_2_04", null ],
      [ "Version 4.2.02, 2011-09-08", "history.html#qpcpp_4_2_02", null ],
      [ "Version 4.2.01, 2011-08-13", "history.html#qpcpp_4_2_01", null ],
      [ "Version 4.2.00, 2011-07-15", "history.html#qpcpp_4_2_00", null ],
      [ "Version 4.1.07, 2011-02-28", "history.html#qpcpp_4_1_07", null ],
      [ "Version 4.1.06, 2011-01-07", "history.html#qpcpp_4_1_06", null ],
      [ "Version 4.1.05, 2010-11-01", "history.html#qpcpp_4_1_05", null ],
      [ "Version 4.1.04, 2010-05-16", "history.html#qpcpp_4_1_04", null ],
      [ "Version 4.1.03, 2010-01-21", "history.html#qpcpp_4_1_03", null ],
      [ "Version 4.1.02, 2010-01-14", "history.html#qpcpp_4_1_02", null ],
      [ "Version 4.1.01, 2009-11-05", "history.html#qpcpp_4_1_01", null ],
      [ "Version 4.1.00, 2009-10-09", "history.html#qpcpp_4_1_00", null ],
      [ "Version 4.0.04 (Product) Apr 09, 2009", "history.html#qpcpp_4_0_04", null ],
      [ "Version 4.0.03, 2008-12-27", "history.html#qpcpp_4_0_03", null ],
      [ "Version 4.0.02, 2008-11-15", "history.html#qpcpp_4_0_02", null ],
      [ "Version 4.0.01, 2008-06-09", "history.html#qpcpp_4_0_01", null ],
      [ "Version 4.0.00, 2008-04-07", "history.html#qpcpp_4_0_00", null ]
    ] ],
    [ "Using Online Help", "help.html", [
      [ "Dark Mode Toggle", "help.html#help_dark_mode", null ],
      [ "Using the Tree View", "help.html#help_tree_view", null ],
      [ "Reading Online Help Sequentially", "help.html#help_seq", null ],
      [ "Quickly Locating a Topic of Interest", "help.html#help_random", null ],
      [ "QL-Doxygen on GitHub", "help.html#help_github", null ]
    ] ],
    [ "Traceability", "tr.html", [
      [ "Upstream Traceability", "tr.html#tr_up", null ],
      [ "Downstream Traceability", "tr.html#tr_down", null ],
      [ "Bidirectional Traceability", "tr.html#tr_bi", null ],
      [ "Traceability Report", "tr.html#tr_rep", null ]
    ] ],
    [ "Certification Pack", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"class_q_p_1_1_q_hsm.html#a51eb2f944f1baa59ce7b2ec109a86ee3",
"class_q_p_1_1_q_time_evt.html#ad00418ce8c9be452afcf943cfc8bed11",
"group__sds__sm.html",
"namespace_q_p.html#a72d7c2147e52405a9e9c8e72aba2ab8bac5529da36a580b3f391539730e3c0ed2",
"ports_lint.html#lint_app",
"qs_8cpp.html#a94076a83b8dc1d820794f8ade981db91",
"qs_8hpp.html#ae1c016cb1d1695e891c08e7a5b79dbd7"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';