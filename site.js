// goes through all the categories and generates
// an array of the different categories used
 
function existingCategoriesList(data) {
	var existingCategories = []
	data.forEach(function getCategoryArray(row) {
		if (row.categories === "") return
		row.categories.forEach(function parseCategories(category) {
			var categoryString = category["category"]
      if (existingCategories.length === 0) existingCategories.push(categoryString)
      if (existingCategories.indexOf(categoryString) > -1) return
      existingCategories.push(categoryString)
    })
  })
  return existingCategories
}

// originally the categories are a string, this separates
// them into their own objects which can be made
// individual links in the html

function separateCategories(data) {
	data.forEach(function findMultiCategories(definition) {
		if (definition.categories === "") return
		if (definition.categories.indexOf(',') >= 0) {
			var categoryArray = parseCategories(definition.categories)
			var categoryObjArray = arrayIntoObjects(categoryArray)
			definition.categories = categoryObjArray
		}
		else {
			definition.categories = [{"category": definition.categories}]
		}
	})
  return data
}

// goes through the string category and separates
// them based on the comma

function parseCategories(bulkCategories) {
	categoryArray = bulkCategories.split(', ')
	return categoryArray
}

// turns the array of strings into objects

function arrayIntoObjects(array) {
  var categories = []
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) categories.push({ "category" : array[i]})
  return categories
}

// find KPIs that match a category

function getCategoryMatches(data, selectedCategory) {
  var matches = []
  data.forEach(function (element) {
    var elCategories = element.categories
    if (elCategories === "") return
    elCategories.forEach(function (category) {
      if (category["category"] === selectedCategory.trim()) matches.push(element)
    })
  })
	  		  $.ajax ({
                  url: "click.php",
		  type: "POST",
                  data: { cell : "category_field", valuecell : selectedCategory }, 
                 }); 
  return matches
}

// render the section of the page that 
// lists the categories

function drawCategories(data) {
  var category = existingCategoriesList(data)
  var contents = ich.categories({
    rows: category
  })
  $('#categories').html(contents)
}


// SUBCATEGORIES FUNCTIONS

// the code below mimics the code for categories.
 
function existingSubcategoriesList(data) {
	var existingSubcategories = []
	data.forEach(function getSubcategoryArray(row) {
		if (row.Subcategories === "") return
		row.subcategories.forEach(function parseSubcategories(subcategory) {
			var subcategoryString = subcategory["subcategory"]
      if (existingSubcategories.length === 0) existingSubcategories.push(subcategoryString)
      if (existingSubcategories.indexOf(subcategoryString) > -1) return
      existingSubcategories.push(subcategoryString)
    })
  })
  return existingSubcategories
}

function separateSubcategories(data) {
	data.forEach(function findMultiSubcategories(definition) {
		if (definition.subcategories === "") return
		if (definition.subcategories.indexOf(',') >= 0) {
			var subcategoryArray = parseSubcategories(definition.subcategories)
			var subcategoryObjArray = arrayIntoObjects(subcategoryArray)
			definition.subcategories = subcategoryObjArray
		}
		else {
			definition.subcategories = [{"subcategory": definition.subcategories}]
		}
	})
  return data
}


function parseSubcategories(bulkSubcategories) {
	subcategoryArray = bulkSubcategories.split(', ')
	return subcategoryArray
}


function arrayIntoObjects(array) {
  var subcategories = []
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) subcategories.push({ "subcategory" : array[i]})
  return subcategories
}


function getSubcategoryMatches(data, selectedSubcategory) {
  var matches = []
  data.forEach(function (element) {
    var elSubcategories = element.subcategories
    if (elSubcategories === "") return
    elSubcategories.forEach(function (subcategory) {
      if (subcategory["subcategory"] === selectedSubcategory.trim()) matches.push(element)

    })
  })
	  		  $.ajax ({
                  url: "click.php",
		  type: "POST",
                  data: { cell : "subcategory_field", valuecell : selectedSubcategory }, 
                 }); 
  return matches
}


function drawSubcategories(data) {
  var subcategory = existingSubcategoriesList(data)
  var contents = ich.subcategories({
    rows: subcategory
  })
  $('#subcategories').html(contents)
}


// THRESHOLD FUNCTIONS

// the code below mimics the code for categories.
 
function existingThresholdsList(data) {
	var existingThresholds = []
	data.forEach(function getThresholdArray(row) {
		if (row.Thresholds === "") return
		row.thresholds.forEach(function parseThresholds(threshold) {
			var thresholdString = threshold["threshold"]
      if (existingThresholds.length === 0) existingThresholds.push(thresholdString)
      if (existingThresholds.indexOf(thresholdString) > -1) return
      existingThresholds.push(thresholdString)
    })
  })
  return existingThresholds
}

function separateThresholds(data) {
	data.forEach(function findMultiThresholds(definition) {
		if (definition.thresholds === "") return
		if (definition.thresholds.indexOf(',') >= 0) {
			var thresholdArray = parseThresholds(definition.thresholds)
			var thresholdObjArray = arrayIntoObjects(thresholdArray)
			definition.thresholds = thresholdObjArray
		}
		else {
			definition.thresholds = [{"threshold": definition.thresholds}]
		}
	})
  return data
}


function parseThresholds(bulkThresholds) {
	thresholdArray = bulkThresholds.split(', ')
	return thresholdArray
}


function arrayIntoObjects(array) {
  var thresholds = []
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) thresholds.push({ "threshold" : array[i]})
  return thresholds
}


function getThresholdMatches(data, selectedThreshold) {
  var matches = []
  data.forEach(function (element) {
    var elThresholds = element.thresholds
    if (elThresholds === "") return
    elThresholds.forEach(function (threshold) {
      if (threshold["threshold"] === selectedThreshold.trim()) matches.push(element)

    })
  })
	  		  $.ajax ({
                  url: "click.php",
		  type: "POST",
                  data: { cell : "threshold_field", valuecell : selectedThreshold }, 
                 }); 
  return matches
}


function drawThresholds(data) {
  var threshold = existingThresholdsList(data)
  var contents = ich.thresholds({
    rows: threshold
  })
  $('#thresholds').html(contents)
}


// FIGURES FUNCTIONS

// the code below mimics the code for categories.
 
function existingFiguresList(data) {
	var existingFigures = []
	data.forEach(function getFigureArray(row) {
		if (row.Figures === "") return
		row.figures.forEach(function parseFigures(figure) {
			var figurestring = figure["figure"]
      if (existingFigures.length === 0) existingFigures.push(figurestring)
      if (existingFigures.indexOf(figurestring) > -1) return
      existingFigures.push(figurestring)
    })
  })
  return existingFigures
}

function separateFigures(data) {
	data.forEach(function findMultiFigures(definition) {
		if (definition.figures === "") return
		if (definition.figures.indexOf(',') >= 0) {
			var figureArray = parseFigures(definition.figures)
			var figureObjArray = arrayIntoObjects(figureArray)
			definition.figures = figureObjArray
		}
		else {
			definition.figures = [{"figure": definition.figures}]
		}
	})
  return data
}


function parseFigures(bulkFigures) {
	figureArray = bulkFigures.split(', ')
	return figureArray
}


function arrayIntoObjects(array) {
  var figures = []
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) figures.push({ "figure" : array[i]})
  return figures
}


function getFigureMatches(data, selectedFigure) {
  var matches = []
  data.forEach(function (element) {
    var elFigures = element.figures
    if (elFigures === "") return
    elFigures.forEach(function (figure) {
      if (figure["figure"] === selectedFigure.trim()) matches.push(element)

    })
  })
	  		  $.ajax ({
                  url: "click.php",
		  type: "POST",
                  data: { cell : "figure_field", valuecell : selectedFigure }, 
                 }); 
  return matches
}


function drawFigures(data) {
  var figure = existingFiguresList(data)
  var contents = ich.figures({
    rows: figure
  })
  $('#figures').html(contents)
}

// PRICES FUNCTIONS

// the code below mimics the code for categories.
 
function existingPricesList(data) {
	var existingPrices = []
	data.forEach(function getPriceArray(row) {
		if (row.Prices === "") return
		row.prices.forEach(function parsePrices(price) {
			var pricestring = price["price"]
      if (existingPrices.length === 0) existingPrices.push(pricestring)
      if (existingPrices.indexOf(pricestring) > -1) return
      existingPrices.push(pricestring)
    })
  })
  return existingPrices
}

function separatePrices(data) {
	data.forEach(function findMultiPrices(definition) {
		if (definition.prices === "") return
		if (definition.prices.indexOf(',') >= 0) {
			var priceArray = parsePrices(definition.prices)
			var priceObjArray = arrayIntoObjects(priceArray)
			definition.prices = priceObjArray
		}
		else {
			definition.prices = [{"price": definition.prices}]
		}
	})
  return data
}


function parsePrices(bulkPrices) {
	priceArray = bulkPrices.split(', ')
	return priceArray
}


function arrayIntoObjects(array) {
  var prices = []
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) prices.push({ "price" : array[i]})
  return prices
}


function getPriceMatches(data, selectedPrice) {
  var matches = []
  data.forEach(function (element) {
    var elPrices = element.prices
    if (elPrices === "") return
    elPrices.forEach(function (price) {
      if (price["price"] === selectedPrice.trim()) matches.push(element)

    })
  })
	          $.ajax ({
                  url: "click.php",
		  type: "POST",
                  data: { cell : "price_field", valuecell : selectedPrice }, 
                 }); 
  return matches
}


function drawPrices(data) {
  var price = existingPricesList(data)
  var contents = ich.prices({
    rows: price
  })
  $('#prices').html(contents)
}


// VIEWS FUNCTIONS

// the code below mimics the code for categories.
 
function existingViewsList(data) {
	var existingViews = []
	data.forEach(function getViewArray(row) {
		if (row.Views === "") return
		row.views.forEach(function parseViews(view) {
			var viewstring = view["view"]
      if (existingViews.length === 0) existingViews.push(viewstring)
      if (existingViews.indexOf(viewstring) > -1) return
      existingViews.push(viewstring)
    })
  })
  return existingViews
}

function separateViews(data) {
	data.forEach(function findMultiViews(definition) {
		if (definition.views === "") return
		if (definition.views.indexOf(',') >= 0) {
			var viewArray = parseViews(definition.views)
			var viewObjArray = arrayIntoObjects(viewArray)
			definition.views = viewObjArray
		}
		else {
			definition.views = [{"view": definition.views}]
		}
	})
  return data
}


function parseViews(bulkViews) {
	viewArray = bulkViews.split(', ')
	return viewArray
}


function arrayIntoObjects(array) {
  var views = []
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) views.push({ "view" : array[i]})
  return views
}


function getViewMatches(data, selectedView) {
  var matches = []
  data.forEach(function (element) {
    var elViews = element.views
    if (elViews === "") return
    elViews.forEach(function (view) {
      if (view["view"] === selectedView.trim()) matches.push(element)

    })
  })
	          $.ajax ({
                  url: "click.php",
		  type: "POST",
                  data: { cell : "view_field", valuecell : selectedView }, 
                 }); 

  return matches
}


function drawViews(data) {
  var view = existingViewsList(data)
  var contents = ich.views({
    rows: view
  })
  $('#views').html(contents)
}



// OTHER FUNCTIONS

// render the page title with its
// KPI count

function pageTitle(data) {
	var amount = data.length
	var contents = ich.title({
  	numKPIs: amount
	})
$('#title').html(contents)
}

// takes off the names

function cleanDates(data) {
	data.forEach(function (item) {
		item.name = item.name.split(" at")[0]
	})
return data
}
