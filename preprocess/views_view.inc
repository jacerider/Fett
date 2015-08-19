<?php

/**
 * @file
 * Preprocess theme_views_view.
 */

function fett_preprocess_views_view(&$vars){
  $view = $vars['view'];

  $vars['classes_array'] = array_filter($vars['classes_array'], function($class) {
    return $class == 'contextual-links-region';
  });
  if(!empty($vars['css_class'])){
    $vars['classes_array'][] = $vars['css_class'];
  }
  else{
    $vars['classes_array'][] = 'view';
    $vars['classes_array'][] = drupal_clean_css_identifier($view->name);
  }
  if(!empty($view->use_ajax)){
    $vars['classes_array'][] = drupal_clean_css_identifier('view-dom-id-' . $view->dom_id);
  }

  // Only show .view-content div wrapper around views when there are other
  // elements around it.
  $vars['wrap_content'] = FALSE;
  $wrap_check = array('header', 'exposed', 'attachment_before', 'attachment_after', 'footer');
  foreach($wrap_check as $check){
    if(!empty($vars[$check])){
      $vars['wrap_content'] = TRUE;
      break;
    }
  }
}