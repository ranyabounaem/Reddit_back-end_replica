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
    "url": "/comment/:c_id",
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
    "url": "/comment/",
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
            "field": "spoiler",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "locked",
            "description": "<p>True if the Replies are Disallowed on this Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "saved",
            "description": "<p>True if it is Saved.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hidden",
            "description": "<p>True if it is Hidden.</p>"
          },
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
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/:c_id",
    "title": "Hide a Comment",
    "name": "HideComment",
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
            "field": "CommentAlreadyHidden",
            "description": "<p>The Comment has already been hidden before.</p>"
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
    "url": "/comment/:c_id",
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
            "field": "id",
            "description": "<p>ID of thread or comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p>specifies whether this is a reply or a comment  .</p>"
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
    "url": "/comment/:c_id",
    "title": "Report a Comment",
    "name": "ReportComment",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The reason of reporting this comment.</p>"
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
    "type": "post",
    "url": "/comment/:c_id",
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
    "url": "/comment/:c_id",
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
    "url": "/comment/:c_id",
    "title": "UnHide a Comment",
    "name": "UnHideComment",
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
            "field": "CommentAlreadyHidden",
            "description": "<p>The Comment is not hidden.</p>"
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
    "url": "/comment/:c_id",
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
    "url": "/comment/:c_id",
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
            "field": "CommentNotSaved",
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
    "url": "/comment/:c_id",
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
    "url": "/comment/:c_id",
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
    "url": "/pm/",
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
            "field": "ReceiverID",
            "description": "<p>unique username.</p>"
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
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OnBlockList",
            "description": "<p>The user you are trying to block is already on the block list</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SelfBlockAlert",
            "description": "<p>an alert if there is a request for selfblock</p>"
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
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"OnBlockList\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"SelfBlockAlert\"\n}",
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
    "url": "/pm/",
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
            "field": "ReceiverID",
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
            "type": "string",
            "optional": false,
            "field": "Subject",
            "description": "<p>Subject of the sending message (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "MessageBody",
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
            "field": "UserNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BlockedFromSending",
            "description": "<p>The user already blocking messages from the receiver</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OverlengthedSubject",
            "description": "<p>The length of the subject is above 100 character</p>"
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
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"BlockedFromSending\"\n}",
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
    "groupTitle": "PMService"
  },
  {
    "type": "delete",
    "url": "/pm/:Id",
    "title": "Delete",
    "name": "Delete",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "MessageID",
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
            "field": "MessageNotFound",
            "description": "<p>The <code>id</code> of the Message was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MessageNotFound\"\n}",
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
    "url": "/pm/:Id",
    "title": "Mark Read",
    "name": "MarkAsRead",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "MessageID",
            "description": "<p>the id of the message going to be marked as read.</p>"
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
            "field": "MessageNotFound",
            "description": "<p>The <code>id</code> of the Message was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MessageNotFound\"\n}",
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
    "url": "/pm/",
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
            "field": "NoMessages",
            "description": "<p>No messages to mark empty array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"NoMessages\"\n}",
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
    "url": "/pm/",
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
            "field": "Mine",
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
            "field": "Messages",
            "description": "<p>Array of Messages    .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n \"messages\":[{\n\"user”:{“Is_read”:false,”email”:”mar.kefo@gmail.com”,”user_id”:”1232”,”profile_url\":\"\"}\n,”subject”:”URGENT VIP”\n,”message”:”Dear, marwan please”,”\n },\n{\"user”:{“Is_read”:false,”email”:”marwankefah@gmail.com”,”user_id”:”1232”,”profile_url\":\"\"}\n,”subject”:”TEST VERIFIED”\n,”message”:”Dear, marwan TEST M2”,”\n} ]\n    }",
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
    "url": "/sr/:SubredditName/thread",
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
            "field": "Username",
            "description": "<p>of creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ThreadTitle",
            "description": "<p>Title of thread</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ThreadData",
            "description": "<p>Data inside thread.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "Spoiler",
            "description": "<p>[Spoiler==false] Mark if post is spoiler</p>"
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
    "url": "/sr/:SubredditName/thread",
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
            "field": "CreatorID",
            "description": "<p>Id of creator.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ThreadTitle",
            "description": "<p>Title of thread</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ThreadData",
            "description": "<p>Data inside thread.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "Spoiler",
            "description": "<p>[Spoiler==false] Mark if post is spoiler</p>"
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
    "url": "/sr/:Id",
    "title": "Create a new subreddit",
    "name": "CreateSubreddit",
    "group": "SrService",
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
            "field": "AdminId",
            "description": "<p>Id of user that created SR.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique Name of the subreddit (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "SubredditRules",
            "description": "<p>list of subbreddit rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "ModUsername",
            "description": "<p>Subreddit moderators' usernames.</p>"
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
            "field": "SR_ID",
            "description": "<p>Unique id of created sr.</p>"
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
    "url": "/sr/:Id",
    "title": "Create a new subreddit",
    "name": "CreateSubreddit",
    "group": "SrService",
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
            "field": "AdminId",
            "description": "<p>Id of user that created SR.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique Name of the subreddit (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "SubredditRules",
            "description": "<p>list of subbreddit rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "ModUsername",
            "description": "<p>Subreddit moderators' usernames.</p>"
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
            "field": "SR_ID",
            "description": "<p>Unique id of created sr.</p>"
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
    "url": "/sr/:Id/thread",
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
    "url": "/sr/:Id/thread",
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
    "url": "/sr/:SubredditName/",
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
            "field": "NewRules",
            "description": "<p>Updated rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Old name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "NewName",
            "description": "<p>New name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "About",
            "description": "<p>Updated about</p>"
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
    "url": "/sr/:SubredditName/",
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
            "field": "NewRules",
            "description": "<p>Updated rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Old name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "NewName",
            "description": "<p>New name</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "About",
            "description": "<p>Updated about</p>"
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
    "url": "/sr/:SubredditName/Listing/:type",
    "title": "ListSubreddits Generate a list of subreddits      //MOSTAFA",
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
    "type": "get",
    "url": "/sr/:SubredditName/Listing/:type",
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
    "url": "/sr/:SubredditName/subs",
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
    "type": "post",
    "url": "/sr/:SubredditName/subs",
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
    "url": "/sr/:SubredditName/subs",
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
    "type": "delete",
    "url": "/sr/:SubredditName/subs",
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
    "url": "/sr/:SrName/meta",
    "title": "Views subreddit meta",
    "name": "ViewSrMeta",
    "group": "SrService",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Username",
            "description": "<p>of Creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "BannedUsers",
            "description": "<p>ID of banned users.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "ModIds",
            "description": "<p>ID of Modertors.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "PostIds",
            "description": "<p>ID of posts in sr.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "Rules",
            "description": "<p>Rules of sr.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "UserIds",
            "description": "<p>Ids of subscribed users .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "SubCount",
            "description": "<p>Number of subscribers.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SrName",
            "description": "<p>Subreddit name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Date",
            "description": "<p>date of creation .</p>"
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
    "url": "/sr/:SrName/meta",
    "title": "Views subreddit meta",
    "name": "ViewSrMeta",
    "group": "SrService",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Creator",
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "BannedUsers",
            "description": "<p>ID of banned users.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "ModIds",
            "description": "<p>ID of Modertors.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "PostIds",
            "description": "<p>ID of posts in sr.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "Rules",
            "description": "<p>Rules of sr.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "UserIds",
            "description": "<p>Ids of subscribed users .</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "SubCount",
            "description": "<p>Number of subscribers.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SrName",
            "description": "<p>Subreddit name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Date",
            "description": "<p>date of creation .</p>"
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
    "url": "/user/listing?type=value",
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
            "field": "PostsnotFound",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Posts not Found\"\n}",
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
    "type": "Post",
    "url": "/me/:username/Block/:BlockedUsername",
    "title": "Block user",
    "name": "BlockUser",
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
            "field": "BlockedUsername",
            "description": "<p>unique Username  of the User to be blocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User1\",      \n}",
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/:username/Block/",
    "title": "Get Blocked users",
    "name": "BlockedUsers",
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
            "field": "BlockedUsername",
            "description": "<p>unique Username  of the User to be blocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n[{\n  \"BlockedUsername\": \"User1\",    \n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Server Error",
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
    "url": "/me/Create",
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
            "description": "<p>SyncToken That is sent with authentication.</p>"
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
          "content": "   \nHTTP/1.1 401 password short\n{\n\"error\":\"Password can't be less than 8 characters\"\n}\n\n HTTP/1.1 402 username repeated \n{\n\"error\":\"This username already exists\"\n}\nHTTP/1.1 403 email repeated \n{\n\"error\":\"This email already exists\"\n}\n\nHTTP/1.1 405 email format \n{\n\"error\":\"Invalid email format\"\n}",
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
    "url": "/me/:username/edit",
    "title": "Edit  user",
    "name": "EditUser_",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ImageId",
            "description": "<p>ID of the User's image.</p>"
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
    "url": "/me/:username",
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
            "field": "username",
            "description": "<p>Users unique username.</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n  \"Email\": \"user@reddit.com\",\n  \"About\": \"Im a reddit user\",\n  \"Imageid\": \"100001\"\n  \"Subscriptions\": [\"subbreddit:askreddit\",\"subbreddit:reddit\"],\n  \"Karma\" :2,\n  \"Cakeday\" : \"21-3-1440\"\n}",
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
    "type": "put",
    "url": "/me/Login",
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
            "description": "<p>SyncToken That is sent with authentication.</p>"
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
          "content": "   HTTP/1.1 405 Invalid\n{\n         \"error\"\":\"Invalid credentials\"\"\n}",
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
  }
] });
