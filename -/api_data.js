define({ "api": [
  {
    "type": "delete",
    "url": "/comment/:c_id",
    "title": "Delete a Comment",
    "name": "DeleteComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't delete this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/:c_id",
    "title": "Edit a Comment",
    "name": "EditComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Text of the Edited Comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "spoiler",
            "defaultValue": "false",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "locked",
            "defaultValue": "false",
            "description": "<p>True if Replies are Disallowed on this Comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't edit this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/expand/:c_id",
    "title": "Retrieve additional comments omitted from a base comment tree",
    "name": "ExpandComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "replies",
            "description": "<p>An array containing all the replies' IDs to this comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/all/:id",
    "title": "Get Comments or Replies for this ID",
    "name": "GetAllComments",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "comment",
            "defaultValue": "false",
            "description": "<p>True if the ID sent is a Comment ID not a Thread ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "objects[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Array of the comments or replies attached to this thread or comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThreadNotFound",
            "description": "<p>The id of the thread wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't get info of this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/:c_id",
    "title": "Get Details About Comment or a Reply",
    "name": "GetComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Text of the Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "c_date",
            "description": "<p>Date of the Posted Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reply",
            "description": "<p>True if it is a reply.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "spoiler",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "locked",
            "description": "<p>True if the Replies are Disallowed on this Comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't get info of this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/lock/:c_id",
    "title": "Lock a Comment to Disallow Replies on it",
    "name": "LockComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAlreadyLocked",
            "description": "<p>The Comment is already locked.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/:id",
    "title": "Post a New Comment",
    "name": "PostComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of thread or comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Text of the Comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "reply",
            "defaultValue": "false",
            "description": "<p>True if you want to post a reply to a comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "spoiler",
            "defaultValue": "false",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "locked",
            "defaultValue": "false",
            "description": "<p>True if Replies are Disallowed on this Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>The Created Comment ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThreadNotFound",
            "description": "<p>The id of the thread wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/save/:c_id",
    "title": "Save a Comment",
    "name": "SaveComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAlreadySaved",
            "description": "<p>The Comment has already been saved before.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/spoil/:c_id",
    "title": "Mark Comment as a Spoiler",
    "name": "SpoilerComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAlreadySpoiler",
            "description": "<p>The Comment is already marked.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/unlock/:c_id",
    "title": "UnLock a Comment to Allow Replies on it",
    "name": "UnLockComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotLocked",
            "description": "<p>The Comment is already unlocked.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/comment/unsave/:c_id",
    "title": "UnSave a Comment",
    "name": "UnSaveComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAlreadySaved",
            "description": "<p>You can't unsave an unsaved comment.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/unspoil/:c_id",
    "title": "UnMark Comment as a Spoiler",
    "name": "UnSpoilerComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotSpoiler",
            "description": "<p>The Comment is already unmarked.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/vote/:c_id",
    "title": "Vote for a Comment",
    "name": "VoteComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "0",
              "-1"
            ],
            "optional": false,
            "field": "direction",
            "description": "<p>Direction of the Vote as 1 indicates Upvote, -1 indicates Downvote and 0 means unvoting.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./-/main.js",
    "group": "D__memestock_backend___main_js",
    "groupTitle": "D__memestock_backend___main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "D__memestock_backend_apidoc_main_js",
    "groupTitle": "D__memestock_backend_apidoc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__memestock_backend_doc_main_js",
    "groupTitle": "D__memestock_backend_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./main.js",
    "group": "D__memestock_backend_main_js",
    "groupTitle": "D__memestock_backend_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/core/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_core_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@babel/traverse/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules__babel_traverse_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_read_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/co/index.js",
    "group": "D__memestock_backend_node_modules_co_index_js",
    "groupTitle": "D__memestock_backend_node_modules_co_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/copy-descriptor/index.js",
    "group": "D__memestock_backend_node_modules_copy_descriptor_index_js",
    "groupTitle": "D__memestock_backend_node_modules_copy_descriptor_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/detect-file/index.js",
    "group": "D__memestock_backend_node_modules_detect_file_index_js",
    "groupTitle": "D__memestock_backend_node_modules_detect_file_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "D__memestock_backend_node_modules_etag_index_js",
    "groupTitle": "D__memestock_backend_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expect/build-es5/index.js",
    "group": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expect_build_es5_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "D__memestock_backend_node_modules_express_lib_express_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "D__memestock_backend_node_modules_express_lib_middleware_init_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "D__memestock_backend_node_modules_express_lib_middleware_query_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_route_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/findup-sync/index.js",
    "group": "D__memestock_backend_node_modules_findup_sync_index_js",
    "groupTitle": "D__memestock_backend_node_modules_findup_sync_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growl/lib/growl.js",
    "group": "D__memestock_backend_node_modules_growl_lib_growl_js",
    "groupTitle": "D__memestock_backend_node_modules_growl_lib_growl_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/gntp.js",
    "group": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_gntp_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/growly.js",
    "group": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/growly.js",
    "group": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/growly.js",
    "group": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/growly.js",
    "group": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growly/lib/growly.js",
    "group": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "groupTitle": "D__memestock_backend_node_modules_growly_lib_growly_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/istanbul-lib-source-maps/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_istanbul_lib_source_maps_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose-legacy-pluralize/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_legacy_pluralize_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_legacy_pluralize_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browserDocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browserDocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browserDocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cast.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cast_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cast_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/cast.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_cast_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_cast_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/disconnected.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_disconnected_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_disconnected_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/messages.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_messages_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_messages_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/mongooseError.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_mongooseError_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_mongooseError_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/objectExpected.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_objectExpected_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_objectExpected_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/objectParameter.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_objectParameter_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_objectParameter_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/parallelSave.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_parallelSave_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_parallelSave_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/strict.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_strict_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_strict_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/validation.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_validation_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_validation_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/validator.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_validator_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_validator_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/version.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_version_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_version_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/cursor/eachAsync.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_helpers_cursor_eachAsync_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_helpers_cursor_eachAsync_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/setDefaultsOnInsert.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_helpers_setDefaultsOnInsert_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_helpers_setDefaultsOnInsert_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/updateValidators.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_helpers_updateValidators_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_helpers_updateValidators_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object-copy/index.js",
    "group": "D__memestock_backend_node_modules_object_copy_index_js",
    "groupTitle": "D__memestock_backend_node_modules_object_copy_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parse-passwd/index.js",
    "group": "D__memestock_backend_node_modules_parse_passwd_index_js",
    "groupTitle": "D__memestock_backend_node_modules_parse_passwd_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/framework/connect.js",
    "group": "D__memestock_backend_node_modules_passport_lib_framework_connect_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_framework_connect_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/index.js",
    "group": "D__memestock_backend_node_modules_passport_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/initialize.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_initialize_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_initialize_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/strategies/session.js",
    "group": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/strategies/session.js",
    "group": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport-strategy/lib/strategy.js",
    "group": "D__memestock_backend_node_modules_passport_strategy_lib_strategy_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_strategy_lib_strategy_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "D__memestock_backend_node_modules_path_to_regexp_index_js",
    "groupTitle": "D__memestock_backend_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "D__memestock_backend_node_modules_regex_not_index_js",
    "groupTitle": "D__memestock_backend_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "D__memestock_backend_node_modules_regex_not_index_js",
    "groupTitle": "D__memestock_backend_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "D__memestock_backend_node_modules_repeat_string_index_js",
    "groupTitle": "D__memestock_backend_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/sliced/index.js",
    "group": "D__memestock_backend_node_modules_sliced_index_js",
    "groupTitle": "D__memestock_backend_node_modules_sliced_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/compiler.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/source-maps.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/static-extend/index.js",
    "group": "D__memestock_backend_node_modules_static_extend_index_js",
    "groupTitle": "D__memestock_backend_node_modules_static_extend_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "D__memestock_backend_node_modules_to_regex_index_js",
    "groupTitle": "D__memestock_backend_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "D__memestock_backend_node_modules_to_regex_index_js",
    "groupTitle": "D__memestock_backend_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "D__memestock_backend_node_modules_use_index_js",
    "groupTitle": "D__memestock_backend_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "D__memestock_backend_node_modules_use_index_js",
    "groupTitle": "D__memestock_backend_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "D__memestock_backend_node_modules_utils_merge_index_js",
    "groupTitle": "D__memestock_backend_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "type": "post",
    "url": "/emoji/",
    "title": "Create an emoji",
    "name": "CreateEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>Unique id of image.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "post",
    "url": "/emoji/",
    "title": "Create an emoji",
    "name": "CreateEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>Unique id of image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "delete",
    "url": "/emoji/",
    "title": "Delete an emoji",
    "name": "DeleteEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "delete",
    "url": "/emoji/",
    "title": "Delete an emoji",
    "name": "DeleteEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>200 Ok.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "   HTTP/1.1 404 Report not found {\n        \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "put",
    "url": "/emoji/",
    "title": "Edit an emoji (instead of deleting then creating)",
    "name": "EditEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>New unique id of new image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "put",
    "url": "/emoji/",
    "title": "Edit an emoji (instead of deleting then creating)",
    "name": "EditEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>New unique id of new image.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found {\n         \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "get",
    "url": "/emoji/",
    "title": "Edit an emoji (instead of deleting then creating)",
    "name": "GetEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>New unique id of new image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "get",
    "url": "/emoji/",
    "title": "Get's an emoji",
    "name": "GetEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Image.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "post",
    "url": "/flair/:Srid",
    "title": "Creates  a  Flair",
    "name": "Create",
    "group": "FlairService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>of the subbreddit that  user wants to create flair for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FlairName",
            "description": "<p>the flair string  added (maximum 100 characters) .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SubbRedditNotFound",
            "description": "<p>the subreddit the user want to add flair to is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OverlengthedFlair",
            "description": "<p>The string length of the flair is over 100 character.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"SubbRedditNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"OverlengthedSubject\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "FlairService"
  },
  {
    "type": "delete",
    "url": "/flair/:SrId",
    "title": "Delete",
    "name": "Delete",
    "group": "FlairService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>of the subbreddit that  user wants to delete flair for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FlairName",
            "description": "<p>the flair string  user want to delete (maximum 100 characters) .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack and to verify the deletion of the message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SubbRedditNotFound",
            "description": "<p>the subreddit the user want to add flair to is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OverlengthedFlair",
            "description": "<p>The string length of the flair user want to delete is over 100 character.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FlairNotFound",
            "description": "<p>The flair string user want to delete is not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FlairNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"SubbRedditNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"OverlengthedSubject\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "FlairService"
  },
  {
    "type": "get",
    "url": "/flair/:SrID",
    "title": "Flair Retrieval",
    "name": "RetrieveFlairs",
    "group": "FlairService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>of the subbreddit that  user wants to get flair for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Flairs",
            "description": "<p>Array of Flairs of the users for the subbredditID requested .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n \"Flairs\":[\n    {\n\"SubbredditID\":3\n,”FlairID”:1\n,”FlairString”:”Doctor”\n },\n{\"SubbredditID\":3\n,”FlairID”:2,\n,\"FlairString\":”Math Teacher\"\n}\n]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SubbRedditNotFound",
            "description": "<p>the subreddit the user want to add flair to is not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"SubbRedditNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "FlairService"
  },
  {
    "type": "post",
    "url": "/Moderator/accept",
    "title": "accept invite moderator",
    "name": "Acceptmod",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ModREQid",
            "description": "<p>unique invite id  of request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"ModREQid\": \"1011\",\n   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "post",
    "url": "/Moderator/Invite/:Username&:SubbreditName",
    "title": "invite moderator",
    "name": "Addmod",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the Moderaor to be added .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubbreditName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SubbreditName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ModREQid",
            "description": "<p>unique invite Id  of the request .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK \n{\n\n         \"ModREQid\":\"101\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"user or subreddit not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "post",
    "url": "/Moderator/Ban/:Username&:SubbreditName",
    "title": "ban user",
    "name": "BanUser",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User to be banned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubbreditName",
            "description": "<p>unique SubbreditName  of the Subbredit to be banned from.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SubbreditName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"user or subreddit not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "get",
    "url": "/Moderator/Reports/",
    "title": "Get all reports",
    "name": "Getreports",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ReporId",
            "description": "<p>unique ReporId  of the Repor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[{\n        \"ReporId\":\"1010\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 server error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "Put",
    "url": "/Moderator/Reports/:id",
    "title": "ignore report",
    "name": "Ignoreports",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ReporId",
            "description": "<p>unique ReporId  of the Repor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"ReporId\": \"1101\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"report not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "delete",
    "url": "/Moderator/LeaveMod/:Username&:SubbreditName",
    "title": "Leave or remove Moderation",
    "name": "LeaveMod",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the Moderaor to remove or leave .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SubbreditName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SubbreditName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"user or subreddit not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "delete",
    "url": "/Moderator/Reports/:id",
    "title": "delete report",
    "name": "deletereports",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ReporId",
            "description": "<p>unique ReporId  of the Repor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"ReporId\": \"1101\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"report not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "get",
    "url": "/notif/",
    "title": "Retrieve",
    "name": "RetrieveNotifications",
    "group": "NotificationsService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Starting",
            "description": "<p>ID of Notifications (If Omitted, latest notifications will be sent.).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>of Notifications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n\"notifications\":[\n  {\"type\": \"message\", \"content\": \"Mustafa Ahmed Sent you a message\", \"ID\": 5}\n  {\"type\": \"ban\", \"content\": \"You have been banned from subreddit /r/MemeGeeks\", \"ID\": 3}\n  ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "NotificationsService"
  },
  {
    "type": "post",
    "url": "/:username/pm/block",
    "title": "Block",
    "name": "Block",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blocked",
            "description": "<p>unique username to be blocked.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "block",
            "description": "<p>true when u need to block false when u need to unblock a user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "usersAlreadyOnBlockLists",
            "description": "<p>The user you are trying to block is already on the block list</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "selfBlockAlert",
            "description": "<p>an alert if there is a request for selfblock</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServerBlockingError",
            "description": "<p>error from the internal server side</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "canNotBUnblockNonBlockedUser",
            "description": "<p>unblocking not blocked user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 forbidden \n{\n  \"error\": \"canNotBUnblockNonBlockedUser\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"userNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"onBlockList\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"selfBlockAlert\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "post",
    "url": "/:username/pm/compose",
    "title": "Compose a new message",
    "name": "Compose",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverUsername",
            "description": "<p>unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject of the sending message (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageBody",
            "description": "<p>the text of the message sent.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "blockedFromSending",
            "description": "<p>The user already blocking messages from the receiver</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "overLengthedSubject",
            "description": "<p>The length of the subject is above 100 character</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServerError",
            "description": "<p>error from the bank end and database manipulation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"blockedFromSending\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"overLengthedSubject\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "delete",
    "url": "/:username/pm/delete",
    "title": "Delete",
    "name": "Delete",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>the id of the message going to be deleted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack and to verify the deletion of the message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "messageNotFound",
            "description": "<p>The <code>id</code> of the Message was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"messageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "put",
    "url": "/:username/pm/markread",
    "title": "Mark Read",
    "name": "MarkAsRead",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>the id of the message going to be marked as read.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReadRequest",
            "description": "<p>true when user wants to mark as read a message false when user wants to mark message as unread</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "messageNotFound",
            "description": "<p>The <code>id</code> of the Message was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"messageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "post",
    "url": "/:username/pm/markreadall",
    "title": "Mark Read-all",
    "name": "MarkReadALL",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReadRequest",
            "description": "<p>true when user wants to mark as read all message false when user wants to markall as unread</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "noMessages",
            "description": "<p>No messages to mark empty array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"noMessages\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "get",
    "url": "/:username/pm/",
    "title": "Retrieve",
    "name": "RetrieveMessages",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "mine",
            "description": "<p>True if u need to retrieve the inbox false if u need to retrieve the sent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "messages",
            "description": "<p>Array of Messages    .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n         {\n {[{\n\"_id\"         :\"5c901c662f87870699fa62e6\"\n\"sender”      :\"kefah\",\n\"receiver\"    : \"omar\",\n”subject”     :”URGENT VIP”,\n\"messageBody\" :”Dear, marwan please”,\n\"isRead\"      :true\n\"messageDate\" :\"2019-03-18 22:32:06.000Z\"\n },\n{\n\"_id\"         :\"5c901c662f87870699fa62e9\"\n\"sender”      :\"mariam \",\n\"receiver\"    : \"kefah\",\n”subject”     :”URGENT VIP”,\n\"messageBody\" :”Dear, kefah i want to ,\n\"isRead\"      :false\n\"messageDate\" :\"2019-03-13 22:32:06.000Z\"\n }\n]}\n    \n         }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "get",
    "url": "/:username/pm/blocklist",
    "title": "Blocklist",
    "name": "retrieveBlockList",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "blocklist",
            "description": "<p>Array of people whom the user is blocking    .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n         {\n {[{\n\"_id\"         :\"5c901c662f87870699fa62e6\"\n\"blocked      :\"kefah\",\n },\n{\n\"_id\"         :\"5c901c662f87870699fa62e9\"\n\"blocked      :\"marwan \",\n }\n]}\n    \n         }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser__method___endpoint_path_",
    "group": "ServiceName",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID. {if any}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n      \"error\": \"UserNotFound\"\n    }\n//////////////////////////////////////",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "ServiceName"
  },
  {
    "type": "post",
    "url": "/sr/:srName/thread",
    "title": "Create a thread inside subreddit",
    "name": "CreateSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Username of creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of thread</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "threadBody",
            "description": "<p>Body of the thread.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "Spoiler",
            "description": "<p>(NOT YET) [Spoiler==false] Mark if post is spoiler</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "post",
    "url": "/sr/create",
    "title": "Create a new subreddit",
    "name": "CreateSubreddit",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Id of user that created SR.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>unique Name of the subreddit (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "srRules",
            "description": "<p>list of subbreddit rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>(NOT YET) Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "ModUsername",
            "description": "<p>(NOT YET)  Subreddit moderators' usernames.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:id/thread",
    "title": "Delete a thread inside subreddit",
    "name": "DeleteSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "PostID",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:Id",
    "title": "Delete a subreddit",
    "name": "DeleteSubreddit",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "put",
    "url": "/sr/:srName/",
    "title": "Edit a subreddit",
    "name": "EditSubreddit",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "newRules",
            "description": "<p>Updated rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newName",
            "description": "<p>New name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "About",
            "description": "<p>(NOT YET) Updated about</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/sr/:SubredditName/listing/:type",
    "title": "ListSubreddits   Generate a list of subreddits",
    "name": "ListSubreddits",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Type",
            "description": "<p>List according to certain type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "SubredditIDs",
            "description": "<p>Returns list of sorted subreddits</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "post",
    "url": "/sr/:srName/subs",
    "title": "Subscribe to a Sr",
    "name": "SubredditSubscribtion",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:srName/subs",
    "title": "Unsubscribe to a Sr",
    "name": "SubredditUnsubscribtion",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/sr/:srName/meta",
    "title": "Views subreddit meta",
    "name": "ViewSrMeta",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>Subreddit name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Username of Creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>date of creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "posts",
            "description": "<p>All posts.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "rules",
            "description": "<p>Rules of sr.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "BannedUsers",
            "description": "<p>(NOT YET)   ID of banned users.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "ModIds",
            "description": "<p>(NOT YET)  ID of Modertors.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "UserIds",
            "description": "<p>(NOT YET  Ids of subscribed users .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "SubCount",
            "description": "<p>(NOT YET)  Number of subscribers.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/user/:Username/about/",
    "title": "About",
    "name": "AboutUser",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>username of the user that the information is about.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cakeday",
            "description": "<p>date of the user joining reddit.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Karma",
            "description": "<p>karma of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "JPG",
            "optional": false,
            "field": "Pic",
            "description": "<p>profile picture of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Username\" : \"TheRealBatman\",\n  \"Name\": \"Mark\",\n  \"Cakeday\": \"21-12-2019\",\n  \"Karma\": 1449,\n  \"Pic\" : data:image/jpeg;base64,...............\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "get",
    "url": "/user/:Username/comments/listing?type=value",
    "title": "List Comments",
    "name": "ListComments",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListingType",
            "description": "<p>Type of the listing that the user wants for the Comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Comments",
            "description": "<p>Array of the listed Comments  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Comments\": [ {\n  \"SubbredditName\": \"r/Damn\",\n  \"PostID\" :3,\n  \"Content\" : \"Hussein is on fire \"\n  },\n  {\n  \"SubbredditName\": \"r/funny\",\n  \"PostID\" :1,\n  \"Content\" : \"Let's see who wins this contest \"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsNotFound",
            "description": "<p>no comments found to be listed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "get",
    "url": "/:username/listing?type=value",
    "title": "List Posts",
    "name": "ListPosts",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>[type == hot] Type of the listing that the user wants for the posts.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "startPosition",
            "description": "<p>Sending 15 posts per after the startposition</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Posts",
            "description": "<p>Array of the listed Posts  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n [    \n {\n\"subredditName\": \"funny\"\n,\"_id\":\"sd232s2231\"\n,\"title\":\"love\"\n,\"postDate\":\"1998-04-23\"\n,\"body\": \"love is known for something\"\n },\n{\n\"subredditName\": \"nature\"\n,\"_id\":\"2dsds23123d\"\n,\"title\":\"vietnam nature\"\n,\"postDate\":\"1998-04-23\"\n,\"body\": \"vietnam nature is known for something\"\n } \n]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PostsnotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"postsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "get",
    "url": "/user/:Username/listing?type=value",
    "title": "List Posts",
    "name": "ListPosts",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>Username of visited User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListingType",
            "description": "<p>[ListingType == HOT] Type of the listing that the user wants for the posts.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "LPostID",
            "description": "<p>id of the last post displayed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Posts",
            "description": "<p>Array of the listed Posts  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n \"Posts\":[\n {\n\"SubbredditName\": \"r/funny\"\n,\"PostID\":1\n,\"Meme\": data:image/jpeg;base64,...............\n },\n{\n\"SubbredditName\": \"r/Damn\"\n,\"PostID\":2\n,\"Meme\": data:image/jpeg;base64,...............\n } \n]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Server",
            "description": "<p>error no subreddits found to be listed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server error\n{\n  \"error\": \"Server error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "get",
    "url": "/user/:Username/Votes",
    "title": "Votes of User",
    "name": "Votes",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Votes",
            "description": "<p>Array of the listed Votes  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Votes\": [ {\n    \"Type\" : \"Upvote\",\n  \"SubbredditName\": \"r/Damn\",\n  \"PostID\" :3\n  },\n  {\n    \"Type\" : \"Upvote\",\n  \"SubbredditName\": \"r/funny\",\n  \"PostID\" :1\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsNotFound",
            "description": "<p>no comments found to be listed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "put",
    "url": "/me/user/block",
    "title": "Block user",
    "name": "BlockUser",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blockedUser",
            "description": "<p>unique Username  of the User to be blocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"blockedUser\": \"User1\"      \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n    \"User Blocked\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 user already blocked\n     {\n     error:\"the user you want to block is already blocked\"\n    },\nHTTP/1.1 404 User not found\n     {\n    error:\"the user you want to block doesnt exist\"\n    },\nHTTP/1.1 404 User blocking himself\n     {\n      error:\"you cant block yourself\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/blockedusers",
    "title": "Get Blocked users",
    "name": "BlockedUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "group": "me",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": true,
            "field": "String",
            "description": "<p>BlockedUsername unique Username  of the User to be blocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n[\n  \"User1\",\n  \"User2\",\n  \"User3\",\n  \"User4\"     \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register new user",
    "name": "CreateUser",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Email\": \"user@reddit.com\",\n  \"Username\": \"User1\",\n  \"Password\": \"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n \"token\":\"we8749832b7498c2b78942\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "   \nHTTP/1.1 406 password short\n{\n\"error\":\"Password too short\"\n}\n\n HTTP/1.1 406 username repeated \n{\n\"error\":\"Username already exists\"\n}\nHTTP/1.1 406 email repeated \n{\n\"error\":\"Email already exists\"\n}\n\nHTTP/1.1 406 email format \n{\n\"error\":\"Invalid Email format\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Put",
    "url": "/me/edit/email/:Username",
    "title": "Edit User email",
    "name": "EditUserEmail",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Email\": \"user@reddit.com\",\n  \"Username\": \"User1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 406 Invalid Email format\n {\n  \"error\": \"Invalid Email format\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 406 Email already exists\n {\n     \"error\" : \"Email already exists\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Put",
    "url": "/me/edit/Password/:Username",
    "title": "Edit User password",
    "name": "EditUserPassword",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewPassword",
            "description": "<p>the new Password for the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OldPassword",
            "description": "<p>the Old Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Email\": \"user@reddit.com\",\n  \"Username\": \"User1\",\n  \"Password\": \"Password\",\n  \"ImageID\" : 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 Wrong Password\n {\n  \"error\": \"Wrong Password\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 406 Password too short\n {\n   error: \"Password too short\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Post",
    "url": "/me/:Username/Friend/:FriendUsername",
    "title": "Add new friend",
    "name": "FriendAdd",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of user .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FriendUsername",
            "description": "<p>unique Username  of user to add.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"User Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Get",
    "url": "/me/:Username/Friend/",
    "title": "get friends",
    "name": "FriendList",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FUsername",
            "description": "<p>unique Username  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n [{\n   \"FUsername\": \"User1\",    \n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 server error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "delete",
    "url": "/me/:Username",
    "title": "/Friend/:FUsername   delete friend request",
    "name": "FriendReqdelete",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of user .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FUsername",
            "description": "<p>unique Username  of user to unadd.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 server error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "delete",
    "url": "/me/:Username/Friend/:FUsername",
    "title": "unfriend",
    "name": "Frienddelete",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of user .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FUsername",
            "description": "<p>unique Username  of user to delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"User Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/user/info",
    "title": "get user info if NOT logged in",
    "name": "GetUserInfo",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToView",
            "description": "<p>unique Username  of the User to be viewed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"userToView\": \"User1\"    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n     \"Username\":\"user1\",\n      Subscriptions:[\"sub1\",\"sub2\",\"sub3\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 user doesnt exist\n {\n \"message\": \"User doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/user/info",
    "title": "get user info if logged in",
    "name": "GetUserInfoLogged",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToView",
            "description": "<p>unique Username  of the User to be viewed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"userToView\": \"User1\"    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n     \"Username\":\"user1\",\n      Subscriptions:[\"sub1\",\"sub2\",\"sub3\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 user blocked you or doesnt exist\n {\n \"message\": \"User doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/About/:Username",
    "title": "Request my account information",
    "name": "Getmyinfo",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>User's unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication..</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User1\",     \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>username  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "About",
            "description": "<p>text to describe the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Imageid",
            "description": "<p>Image id  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Karma",
            "description": "<p>Karma of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cakeday",
            "description": "<p>Date of joining Reddit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Subscriptions",
            "description": "<p>subreddit subscriptons  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Username\": \"User1\"\n  \"Email\": \"user@reddit.com\",\n  \"About\": \"Im a reddit user\",\n  \"Imageid\": \"100001\"\n  \"Subscriptions\": [\"subbreddit:askreddit\",\"subbreddit:reddit\"],\n  \"Karma\" :2,\n  \"Cakeday\" : \"21-3-1440\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n  {\n   \"error\": \"User Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 405 User not found\n  {\n   \"error\": \"Not Authorized\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/user/Login",
    "title": "login attempt",
    "name": "LoginUser",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User1\",\n  \"Password\": \"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n \"token\":\"we8749832b7498c2b78942\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "   HTTP/1.1 401 Invalid\n{\n         \"error\"\":\"Invalid Password\"\n}\n\n HTTP/1.1 404 Invalid\n{\n       \"error\"\":\"User doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Post",
    "url": "/me/:username/Report/:id",
    "title": "report user comment or post",
    "name": "Report",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>unique Id  of the post or comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>type is post or comment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Id\": \"1\", \n  \"Type\":\"Post\"     \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"Post Not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/unblock",
    "title": "unblock user",
    "name": "UnblockUser",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unblockedUser",
            "description": "<p>unique Username  of the User to be unblocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"unblockedUser\": \"User1\"    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n    \"User unblocked\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 user isnt blocked\n {\n error:\"the user you want to unblock isnt blocked\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/emoji/",
    "title": "Create an emoji",
    "name": "CreateEmoji",
    "group": "test",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>Unique id of image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "test"
  }
] });
