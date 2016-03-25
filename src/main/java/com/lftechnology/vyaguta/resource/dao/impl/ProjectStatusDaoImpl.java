package com.lftechnology.vyaguta.resource.dao.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Order;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.lftechnology.vyaguta.commons.dao.BaseDao;
import com.lftechnology.vyaguta.commons.util.MultivaluedMap;
import com.lftechnology.vyaguta.resource.common.CommonConstant;
import com.lftechnology.vyaguta.resource.dao.ProjectStatusDao;
import com.lftechnology.vyaguta.resource.entity.ProjectStatus;

/**
 * 
 * @author Achyut Pokhrel <achyutpokhrel@lftechnology.com>
 *
 */
@Stateless
public class ProjectStatusDaoImpl extends BaseDao<ProjectStatus, String>implements ProjectStatusDao {

    public ProjectStatusDaoImpl() {
        super(ProjectStatus.class);
    }

    @Override
    protected Predicate[] extractPredicates(MultivaluedMap<String, String> queryParameters,
            CriteriaBuilder criteriaBuilder, Root<ProjectStatus> root) {
        List<Predicate> predicates = new ArrayList<>();

        // search by title
        if (queryParameters.containsKey(CommonConstant.TITLE)) {
            String title = queryParameters.getFirst(CommonConstant.TITLE).toUpperCase();
            Predicate predicate = criteriaBuilder.equal(criteriaBuilder.upper(root.get(CommonConstant.TITLE)), title);
            if (queryParameters.containsKey(CommonConstant.SEARCH_MODE)) {
                if (queryParameters.getFirst(CommonConstant.SEARCH_MODE).equals(CommonConstant.ANY)) {
                    predicate = criteriaBuilder.like(criteriaBuilder.upper(root.get(CommonConstant.TITLE)),
                            "%" + title + "%");
                }
            }
            predicates.add(predicate);
        }
        return predicates.toArray(new Predicate[] {});
    }

    @Override
    protected List<Order> getSortOrder(List<String> sorts, CriteriaBuilder criteriaBuilder, Root<ProjectStatus> root) {
        List<Order> orders = new ArrayList<>();
        for (String sort : sorts) {
            String sortField = "-".equals(sort.substring(0, 1)) ? sort.replaceFirst("-", "") : sort;
            if (sortField.equals(CommonConstant.TITLE)) {
                orders.add("-".equals(sort.substring(0, 1)) ? criteriaBuilder.desc(root.get(sort.replaceFirst("-", "")))
                        : criteriaBuilder.asc(root.get(sort)));
            }
        }
        return orders;
    }
}
